import { EventEmitter, OnInit } from '@angular/core';
import { DynamicBehaviorComponent } from "../../dynamic-behavior/dynamic-behavior.component";
export declare class AutoCompleteComponent extends DynamicBehaviorComponent implements OnInit {
    data: any;
    option: any;
    fieldCreation: any;
    inputIndex: any;
    rowIndex: any;
    callBack: EventEmitter<{}>;
    panelCallBack: EventEmitter<{}>;
    columnCalculate: string;
    objKeys: (o: {}) => string[];
    autoCompleteFilterList: any[];
    displayAutoComplete: any[];
    setOnList: any[];
    maxShowData: number;
    selectIndex: number;
    tempValue: any[];
    tempValueValidate: {};
    tempFilter: any[];
    scrollbarOptions: {
        axis: string;
        theme: string;
    };
    displayIndex: any[];
    allowTempData: boolean;
    constructor();
    ngOnInit(): void;
    addMultiVal(): void;
    deleteMultiVal(dataIndex: any): void;
    processFocus(event: any, action: any, dataIndex: any): void;
    hideList(dataIndex: any): void;
    setOverList(dataIndex: any): void;
    setOutList(dataIndex: any): void;
    processKeyUp(event: any, action: any, dataIndex: any): boolean;
    processKeyDown(event: any, action: any, dataIndex: any): void;
    processCall(data: any): void;
    assignData(event: any, dataIndex: any, data: any): void;
    processCallBackKeyPress(event: any, action: any, dataIndex: any): boolean;
    processBlur(event: any, action: any, dataIndex: any): void;
    mouseOverChangeIndex(filterIndex: any): void;
    filterAutoComplete(dataIndex: any): void;
    refineValueList(): void;
    checkDefault(): boolean;
}