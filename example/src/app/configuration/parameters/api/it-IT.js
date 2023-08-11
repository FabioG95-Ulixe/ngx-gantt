module.exports = [
    {
        type: 'component',
        name: 'ngx-gantt',
        description: '',
        properties: [
            {
                name: 'items',
                description: `Imposta gli elementi di dati. Se imposti gli elementi singolarmente, verranno visualizzati in un elenco. Se è necessario visualizzarli in gruppi, è necessario impostare l'attributo groupId in modo che corrisponda ai dati di gruppo`,
                type: 'GanttItem[]'
            },
            {
                name: 'groups',
                description: `Imposta i gruppi`,
                type: 'GanttGroup[]'
            },
            {
                name: 'baselineItems',
                description: `Configura i dati di confronto`,
                type: 'GanttBaselineItem[]'
            },
            {
                name: 'viewType',
                description: `Configura il tipo di vista`,
                type: `day | month | quarter`,
                default: 'month'
            },
            {
                name: 'start',
                description: `Imposta nel diagramma di Gantt la data inizio, il formato è timestamp a 10 cifre`,
                type: 'number'
            },
            {
                name: 'end',
                description: `Imposta nel diagramma di Gantt la data fine, il formato è timestamp a 10 cifre`,
                type: 'number'
            },
            {
                name: 'draggable',
                description: `Imposta drag and drop`,
                type: 'boolean',
                default: 'false'
            },
            {
                name: 'virtualScrollEnabled',
                description: `Imposta il virtual scroll`,
                type: 'boolean',
                default: 'true'
            },
            {
                name: 'linkable',
                description: `Imposta se i dati possono essere collegati`,
                type: 'boolean',
                default: 'false'
            },

            {
                name: 'loading',
                description: `Imposta il caricamento`,
                type: 'boolean',
                default: 'false'
            },

            {
                name: 'loadingDelay',
                description: 'Quanti "millisecondi" impostare di ritardo per il loader',
                type: 'number',
                default: '0'
            },

            {
                name: 'maxLevel',
                description: `Imposta il livello massimo di visualizzazione`,
                type: 'number',
                default: 2
            },

            {
                name: 'async',
                description: `Imposta se avviare in modo asincrono`,
                type: 'boolean',
                default: 'false'
            },
            {
                name: 'childrenResolve',
                description: `Imposta la funzione di ritorno dell'origine dati asincrona e il valore restituito è un flusso di dati Observable`,
                type: 'Function'
            },

            {
                name: 'styles',
                description: `Configura lo stile`,
                type: 'GanttStyles'
            },
            {
                name: 'viewOptions',
                description: `Configura le opzioni di visualizzazione`,
                type: 'GanttViewOptions'
            },
            {
                name: 'disabledLoadOnScroll',
                description: `Disabilita il caricamento allo scroll`,
                type: 'boolean',
                default: false
            },
            {
                name: 'selectable',
                description: `Impostare se possibile selezionare l'intera riga`,
                type: 'boolean',
                default: 'false'
            },
            {
                name: 'multiple',
                description: `Imposta se possibile selezionare l'intera riga in modalità di selezione multipla`,
                type: 'boolean',
                default: 'false'
            },
            {
                name: 'showToolbar',
                description: `Mostra barra degli strumenti`,
                type: 'boolean',
                default: 'false'
            },
            {
                name: 'toolbarOptions',
                description: `Opzioni barra degli strumenti`,
                type: 'GanttToolbarOptions',
                default: `{
                    viewTypes: [GanttViewType.day, GanttViewType.month, GanttViewType.year]
                }`
            },
            {
                name: 'loadOnScroll',
                description: `Evento Caricamento allo scorrimento`,
                type: 'EventEmitter<GanttLoadOnScrollEvent>'
            },
            {
                name: 'dragStarted',
                description: `Evento Drag iniziato`,
                type: 'EventEmitter<GanttDragEvent>'
            },
            {
                name: 'dragEnded',
                description: `Evento Drag finito`,
                type: 'EventEmitter<GanttDragEvent>'
            },
            {
                name: 'linkDragStarted',
                description: `Evento di caricamento dell'evento dopo lo scorrimento e l'inizio del trascinamento della relazione di associazione`,
                type: 'EventEmitter<GanttLinkDragEvent>'
            },
            {
                name: 'linkDragEnded',
                description: `L'evento dopo la relazione di associazione viene trascinato e rilasciato`,
                type: 'EventEmitter<GanttLinkDragEvent>'
            },
            {
                name: 'barClick',
                description: `Evento click sulla barra elemento`,
                type: 'EventEmitter<GanttBarClickEvent>'
            },
            {
                name: 'lineClick',
                description: `Evento click sulla linea`,
                type: 'EventEmitter<GanttLinkDragEvent>'
            },
            {
                name: 'selectedChange',
                description: `Evento cambio selezione`,
                type: 'EventEmitter<GanttSelectedEvent>'
            },
            {
                name: '#group',
                description: `Impostare il modello di visualizzazione del gruppo`,
                type: 'TemplateRef<any>'
            },
            {
                name: '#bar',
                description: `Impostare il modello di visualizzazione della barra`,
                type: 'TemplateRef<any>'
            },
            {
                name: '#groupHeader',
                description: `Impostare il modello di visualizzazione dell'intestazione gruppo`,
                type: 'TemplateRef<any>'
            },
            {
                name: '#tableEmpty',
                description: `Impostare il modello di visualizzazione della tabella vuota`,
                type: 'TemplateRef<any>'
            },
            {
                name: '#toolbar',
                description: `Impostare il modello di visualizzazione della barra degli strumenti`,
                type: 'TemplateRef<any>'
            }
        ]
    },
    {
        type: 'component',
        name: 'ngx-gantt-table',
        description: 'Tabella di sinistra del diagramma di Gantt',
        properties: [
            {
                name: 'draggable',
                description: `Imposta se gli elementi di dati della tabella supportano l'ordinamento con trascinamento verso l'alto e verso il basso`,
                default: false,
                type: 'boolean'
            },
            {
                name: 'dropEnterPredicate',
                description: `Questa funzione viene utilizzata per determinare se un elemento di dati può essere trascinato su altri elementi`,
                type: '(context: GanttTableDragEnterPredicateContext<T>) => boolean'
            },
            {
                name: 'dragDropped',
                description: `Attivato quando si trascina un elemento dati su un altro elemento dati`,
                type: 'EventEmitter<GanttTableDragDroppedEvent>'
            },
            {
                name: 'dragStarted',
                description: `Evento dopo l'inizio del trascinamento`,
                type: 'EventEmitter<GanttTableDragStartedEvent>'
            },
            {
                name: 'dragEnded',
                description: `Evento dopo la fine del trascinamento`,
                type: 'EventEmitter<GanttTableDragEndedEvent>'
            },
            {
                name: 'columnChanges',
                description: `Insieme di eventi di modifica della larghezza della colonna`,
                type: 'EventEmitter<GanttTableEvent>'
            },
            {
                name: 'itemClick',
                description: `Selezionare l'evento dell'elemento di dati dell'intera riga`,
                type: 'EventEmitter<GanttSelectedEvent>'
            },
            {
                name: '#rowBeforeSlot',
                description: `Imposta il modello di rendering personalizzato anteriore per ogni riga della tabella`,
                type: 'TemplateRef<any>'
            },
            {
                name: '#rowAfterSlot',
                description: `Imposta il modello di rendering personalizzato posteriore per ogni riga della tabella`,
                type: 'TemplateRef<any>'
            }
        ]
    },
    {
        type: 'component',
        name: 'ngx-gantt-column',
        description: 'Colonna sinistra del diagramma di Gantt',
        properties: [
            {
                name: 'name',
                description: `Nome`,
                type: 'string'
            },
            {
                name: 'width',
                description: `Larghezza`,
                type: 'string ｜ number'
            },
            {
                name: '#header',
                description: `Imposta il modello di contenuto per ogni intestazione`,
                type: 'TemplateRef<any>'
            },
            {
                name: '#cell',
                description: `Imposta il modello di contenuto per ogni colonna`,
                type: 'TemplateRef<any>'
            }
        ]
    },
    {
        type: 'component',
        name: 'ngx-gantt-bar',
        description: 'Visualizzazione grafico a barre dei dati',
        properties: [
            {
                name: 'template',
                description: `Impostare il modello di visualizzazione della barra del tempo`,
                type: 'TemplateRef<any>'
            },
            {
                name: 'item',
                description: `Imposta i dati nella barra del tempo`,
                type: 'GanttItemInternal'
            },
            {
                name: 'barClick',
                description: `Evento di click del grafico a barre dell'elemento di dati`,
                type: 'EventEmitter<GanttBarClickEvent>'
            }
        ]
    },
    {
        type: 'component',
        name: 'ngx-gantt-range',
        description: 'Visualizzazione intervallo dati',
        properties: [
            {
                name: 'template',
                description: `Impostare il modello di visualizzazione dell'intervallo`,
                type: 'TemplateRef<any>'
            },
            {
                name: 'item',
                description: `Impostare i dati di visualizzazione dell'intervallo`,
                type: 'GanttItemInternal'
            }
        ]
    },
    {
        type: 'component',
        name: 'ngx-gantt-toolbar',
        description: 'Barra degli Strumenti',
        properties: [
            {
                name: 'template',
                description: `Template barra degli strumenti`,
                type: 'TemplateRef<any>'
            }
        ]
    },
    {
        type: 'component',
        name: 'ngx-gantt-baseline',
        description: 'Visualizzazione della linea di base',
        properties: [
            {
                name: 'baselineItem',
                description: `Imposta i dati di visualizzazione della linea di base`,
                type: 'GanttBaselineItemInternal'
            }
        ]
    },
    {
        type: 'component',
        name: 'ngx-gantt-root',
        description: 'Gantt Root Configurazioni',
        properties: [
            {
                name: 'sideWidth',
                description: `Imposta la larghezza del contenuto a sinistra del diagramma di Gantt`,
                type: 'number'
            },
            {
                name: 'sideTemplate',
                description: `Imposta il modello di contenuto sul lato sinistro del diagramma di Gantt`,
                type: 'TemplateRef<any>'
            },
            {
                name: 'mainTemplate',
                description: `Imposta il modello di contenuto principale sul lato destro del diagramma di Gantt`,
                type: 'TemplateRef<any>'
            }
        ]
    }
];
