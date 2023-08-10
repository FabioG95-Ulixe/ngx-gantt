import { GanttLinkType, GanttLinkOptions, GanttLinkLineType } from './class/link';
import { InjectionToken } from '@angular/core';

export interface GanttDateFormat {
    week?: string;
    month?: string;
    quarter?: string;
    year?: string;
    yearMonth?: string;
    yearQuarter?: string;
}

export interface GanttGlobalConfig {
    dateFormat?: GanttDateFormat;
    linkOptions?: GanttLinkOptions;
}

export const defaultConfig = {
    dateFormat: {
        week: 'w',
        month: 'M',
        quarter: 'QQQ',
        year: 'yyyy',
        yearMonth: 'MM-yyyy',
        yearQuarter: 'QQQ-yyyy'
    },
    linkOptions: {
        dependencyTypes: [GanttLinkType.fs],
        showArrow: false,
        lineType: GanttLinkLineType.curve
    }
};

export const GANTT_GLOBAL_CONFIG = new InjectionToken<GanttGlobalConfig>('GANTT_GLOBAL_CONFIG');
