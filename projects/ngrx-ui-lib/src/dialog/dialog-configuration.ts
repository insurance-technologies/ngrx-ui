import { DialogPosition } from './dialog-position';
import { MatDialogConfig } from '@angular/material';

export interface DialogConfigCollection
{
    default: MatDialogConfig;
    xs?: MatDialogConfig;
    sm?: MatDialogConfig;
    md?: MatDialogConfig;
    lg?: MatDialogConfig;
    xl?: MatDialogConfig;
    ltsm?: MatDialogConfig;
    ltmd?: MatDialogConfig;
    ltlg?: MatDialogConfig;
    ltxl?: MatDialogConfig;
    gtxs?: MatDialogConfig;
    gtsm?: MatDialogConfig;
    gtmd?: MatDialogConfig;
    gtlg?: MatDialogConfig;

    [configName: string]: MatDialogConfig;
}