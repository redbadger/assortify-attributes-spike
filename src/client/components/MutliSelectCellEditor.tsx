import { Checkbox, FormControlLabel, Input } from "@mui/material";
import { ICellEditorParams } from "ag-grid-community";
import { useCombobox, useMultipleSelection } from "downshift";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import "twin.macro";
import splitAndTrim from "../utils/splitAndTrim";

const MultiSelectCellEditor = forwardRef(
  (props: ICellEditorParams & { values: string[] }, ref) => {
    const key = props.colDef.field?.slice(0, -1);
    if (!key) throw new Error("Missing field name");

    const items = [...props.values];
    const [inputValue, setInputValue] = useState("");

    const {
      addSelectedItem,
      removeSelectedItem,
      setSelectedItems,
      selectedItems,
      getDropdownProps,
    } = useMultipleSelection({
      initialSelectedItems: splitAndTrim(props.value),
    });

    const getFilteredItems = (items: string[]) =>
      items
        .sort()
        .filter((item) =>
          item.toLowerCase().includes(inputValue.toLowerCase())
        );

    const { getInputProps, getItemProps, getMenuProps } = useCombobox({
      inputValue,
      items: getFilteredItems(items),
      onStateChange: ({ inputValue = "", type }) => {
        if (type === useCombobox.stateChangeTypes.InputChange) {
          setInputValue(inputValue);
        }
      },
    });

    useImperativeHandle(ref, () => ({
      getValue: () => selectedItems.sort().join(", "),
    }));

    const [width, setWidth] = useState(() => props.column.getActualWidth());
    const cellHeight = props.node.rowHeight ?? 25;

    useEffect(() => {
      const listener = () => {
        setWidth(props.column.getActualWidth());
      };

      props.api.addEventListener("columnResized", listener);

      return () => {
        props.api.removeEventListener("columnResized", listener);
      };
    }, []);

    return (
      <div tw="max-h-[210px] bg-white text-sm flex flex-col" style={{ width }}>
        <div
          tw="px-4 w-full truncate flex-none"
          style={{ height: cellHeight, lineHeight: `${cellHeight}px` }}
        >
          {selectedItems.length ? (
            selectedItems.sort().join(", ")
          ) : (
            <span tw="text-gray-400">No options selected</span>
          )}
        </div>
        <div tw="px-4 flex-none mb-2">
          <Input
            tw="w-full"
            {...getInputProps({}, { suppressRefError: true })}
            {...getDropdownProps()}
            placeholder="Search for options"
            autoFocus
          />
        </div>
        <ul tw="list-none px-0 flex-1 my-0 overflow-y-auto" {...getMenuProps()}>
          {!inputValue && (
            <li tw="px-4 truncate">
              <FormControlLabel
                control={
                  <Checkbox
                    indeterminate={
                      !!selectedItems.length &&
                      selectedItems.length !== items.length
                    }
                  />
                }
                label={<span tw="text-sm">Select all</span>}
                checked={selectedItems.length === items.length}
                onChange={(_e, checked) => {
                  setSelectedItems(checked ? items : []);
                }}
              />
            </li>
          )}
          {getFilteredItems(items).map((item, index) => (
            <li
              tw="px-4 truncate"
              key={item}
              {...getItemProps({ item, index })}
            >
              <FormControlLabel
                control={<Checkbox />}
                label={<span tw="text-sm">{item}</span>}
                checked={selectedItems.includes(item)}
                onChange={(_e, checked) => {
                  checked ? addSelectedItem(item) : removeSelectedItem(item);
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

MultiSelectCellEditor.displayName = "MultiSelectCellEditor";

export default MultiSelectCellEditor;
