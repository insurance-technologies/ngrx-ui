import { DialogPosition } from './dialog-position';

export interface DialogConfig
{
    width?: string;
    height?: string;
    maxHeight?: string;
    maxWidth?: string;
    minHeight?: string;
    minWidth?: string;
    autoFocus?: boolean;
    closeOnNavigation?: boolean;
    position?: DialogPosition;
    disableClose?: boolean;
    hasBackdrop?: boolean;    
}

export interface DialogConfigCollection
{
    default: DialogConfig;
    xs?: DialogConfig;
    sm?: DialogConfig;
    md?: DialogConfig;
    lg?: DialogConfig;
    xl?: DialogConfig;
    ltsm?: DialogConfig;
    ltmd?: DialogConfig;
    ltlg?: DialogConfig;
    ltxl?: DialogConfig;
    gtxs?: DialogConfig;
    gtsm?: DialogConfig;
    gtmd?: DialogConfig;
    gtlg?: DialogConfig;

    [configName: string]: DialogConfig;
}