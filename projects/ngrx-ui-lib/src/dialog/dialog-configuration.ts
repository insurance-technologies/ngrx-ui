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
    [configName: string]: DialogConfig;
}