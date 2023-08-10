export enum GanttViewType {
    day = 'day',
    quarter = 'quarter',
    month = 'month',
    year = 'year',
    week = 'week'
}

export const ganttViews = [
    {
        name: 'Giorno',
        value: GanttViewType.day
    },
    {
        name: 'Settimana',
        value: GanttViewType.week
    },
    {
        name: 'Mese',
        value: GanttViewType.month
    },
    {
        name: 'Trimestre',
        value: GanttViewType.quarter
    },
    {
        name: 'Anno',
        value: GanttViewType.year
    }
];
