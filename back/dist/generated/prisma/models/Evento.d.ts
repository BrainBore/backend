import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type EventoModel = runtime.Types.Result.DefaultSelection<Prisma.$EventoPayload>;
export type AggregateEvento = {
    _count: EventoCountAggregateOutputType | null;
    _avg: EventoAvgAggregateOutputType | null;
    _sum: EventoSumAggregateOutputType | null;
    _min: EventoMinAggregateOutputType | null;
    _max: EventoMaxAggregateOutputType | null;
};
export type EventoAvgAggregateOutputType = {
    id: number | null;
};
export type EventoSumAggregateOutputType = {
    id: number | null;
};
export type EventoMinAggregateOutputType = {
    id: number | null;
    fecha: Date | null;
    color: string | null;
    categoria: string | null;
    titulo: string | null;
    hora: string | null;
    ubicacion: string | null;
    estado: string | null;
};
export type EventoMaxAggregateOutputType = {
    id: number | null;
    fecha: Date | null;
    color: string | null;
    categoria: string | null;
    titulo: string | null;
    hora: string | null;
    ubicacion: string | null;
    estado: string | null;
};
export type EventoCountAggregateOutputType = {
    id: number;
    fecha: number;
    color: number;
    categoria: number;
    titulo: number;
    hora: number;
    ubicacion: number;
    estado: number;
    _all: number;
};
export type EventoAvgAggregateInputType = {
    id?: true;
};
export type EventoSumAggregateInputType = {
    id?: true;
};
export type EventoMinAggregateInputType = {
    id?: true;
    fecha?: true;
    color?: true;
    categoria?: true;
    titulo?: true;
    hora?: true;
    ubicacion?: true;
    estado?: true;
};
export type EventoMaxAggregateInputType = {
    id?: true;
    fecha?: true;
    color?: true;
    categoria?: true;
    titulo?: true;
    hora?: true;
    ubicacion?: true;
    estado?: true;
};
export type EventoCountAggregateInputType = {
    id?: true;
    fecha?: true;
    color?: true;
    categoria?: true;
    titulo?: true;
    hora?: true;
    ubicacion?: true;
    estado?: true;
    _all?: true;
};
export type EventoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventoWhereInput;
    orderBy?: Prisma.EventoOrderByWithRelationInput | Prisma.EventoOrderByWithRelationInput[];
    cursor?: Prisma.EventoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EventoCountAggregateInputType;
    _avg?: EventoAvgAggregateInputType;
    _sum?: EventoSumAggregateInputType;
    _min?: EventoMinAggregateInputType;
    _max?: EventoMaxAggregateInputType;
};
export type GetEventoAggregateType<T extends EventoAggregateArgs> = {
    [P in keyof T & keyof AggregateEvento]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEvento[P]> : Prisma.GetScalarType<T[P], AggregateEvento[P]>;
};
export type EventoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventoWhereInput;
    orderBy?: Prisma.EventoOrderByWithAggregationInput | Prisma.EventoOrderByWithAggregationInput[];
    by: Prisma.EventoScalarFieldEnum[] | Prisma.EventoScalarFieldEnum;
    having?: Prisma.EventoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventoCountAggregateInputType | true;
    _avg?: EventoAvgAggregateInputType;
    _sum?: EventoSumAggregateInputType;
    _min?: EventoMinAggregateInputType;
    _max?: EventoMaxAggregateInputType;
};
export type EventoGroupByOutputType = {
    id: number;
    fecha: Date;
    color: string;
    categoria: string;
    titulo: string;
    hora: string;
    ubicacion: string;
    estado: string;
    _count: EventoCountAggregateOutputType | null;
    _avg: EventoAvgAggregateOutputType | null;
    _sum: EventoSumAggregateOutputType | null;
    _min: EventoMinAggregateOutputType | null;
    _max: EventoMaxAggregateOutputType | null;
};
export type GetEventoGroupByPayload<T extends EventoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EventoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EventoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EventoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EventoGroupByOutputType[P]>;
}>>;
export type EventoWhereInput = {
    AND?: Prisma.EventoWhereInput | Prisma.EventoWhereInput[];
    OR?: Prisma.EventoWhereInput[];
    NOT?: Prisma.EventoWhereInput | Prisma.EventoWhereInput[];
    id?: Prisma.IntFilter<"Evento"> | number;
    fecha?: Prisma.DateTimeFilter<"Evento"> | Date | string;
    color?: Prisma.StringFilter<"Evento"> | string;
    categoria?: Prisma.StringFilter<"Evento"> | string;
    titulo?: Prisma.StringFilter<"Evento"> | string;
    hora?: Prisma.StringFilter<"Evento"> | string;
    ubicacion?: Prisma.StringFilter<"Evento"> | string;
    estado?: Prisma.StringFilter<"Evento"> | string;
};
export type EventoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    ubicacion?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type EventoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.EventoWhereInput | Prisma.EventoWhereInput[];
    OR?: Prisma.EventoWhereInput[];
    NOT?: Prisma.EventoWhereInput | Prisma.EventoWhereInput[];
    fecha?: Prisma.DateTimeFilter<"Evento"> | Date | string;
    color?: Prisma.StringFilter<"Evento"> | string;
    categoria?: Prisma.StringFilter<"Evento"> | string;
    titulo?: Prisma.StringFilter<"Evento"> | string;
    hora?: Prisma.StringFilter<"Evento"> | string;
    ubicacion?: Prisma.StringFilter<"Evento"> | string;
    estado?: Prisma.StringFilter<"Evento"> | string;
}, "id">;
export type EventoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    ubicacion?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    _count?: Prisma.EventoCountOrderByAggregateInput;
    _avg?: Prisma.EventoAvgOrderByAggregateInput;
    _max?: Prisma.EventoMaxOrderByAggregateInput;
    _min?: Prisma.EventoMinOrderByAggregateInput;
    _sum?: Prisma.EventoSumOrderByAggregateInput;
};
export type EventoScalarWhereWithAggregatesInput = {
    AND?: Prisma.EventoScalarWhereWithAggregatesInput | Prisma.EventoScalarWhereWithAggregatesInput[];
    OR?: Prisma.EventoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EventoScalarWhereWithAggregatesInput | Prisma.EventoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Evento"> | number;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"Evento"> | Date | string;
    color?: Prisma.StringWithAggregatesFilter<"Evento"> | string;
    categoria?: Prisma.StringWithAggregatesFilter<"Evento"> | string;
    titulo?: Prisma.StringWithAggregatesFilter<"Evento"> | string;
    hora?: Prisma.StringWithAggregatesFilter<"Evento"> | string;
    ubicacion?: Prisma.StringWithAggregatesFilter<"Evento"> | string;
    estado?: Prisma.StringWithAggregatesFilter<"Evento"> | string;
};
export type EventoCreateInput = {
    fecha: Date | string;
    color: string;
    categoria: string;
    titulo: string;
    hora: string;
    ubicacion: string;
    estado?: string;
};
export type EventoUncheckedCreateInput = {
    id?: number;
    fecha: Date | string;
    color: string;
    categoria: string;
    titulo: string;
    hora: string;
    ubicacion: string;
    estado?: string;
};
export type EventoUpdateInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    ubicacion?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EventoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    ubicacion?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EventoCreateManyInput = {
    id?: number;
    fecha: Date | string;
    color: string;
    categoria: string;
    titulo: string;
    hora: string;
    ubicacion: string;
    estado?: string;
};
export type EventoUpdateManyMutationInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    ubicacion?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EventoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    ubicacion?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EventoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    ubicacion?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type EventoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type EventoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    ubicacion?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type EventoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    ubicacion?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type EventoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type EventoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fecha?: boolean;
    color?: boolean;
    categoria?: boolean;
    titulo?: boolean;
    hora?: boolean;
    ubicacion?: boolean;
    estado?: boolean;
}, ExtArgs["result"]["evento"]>;
export type EventoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fecha?: boolean;
    color?: boolean;
    categoria?: boolean;
    titulo?: boolean;
    hora?: boolean;
    ubicacion?: boolean;
    estado?: boolean;
}, ExtArgs["result"]["evento"]>;
export type EventoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fecha?: boolean;
    color?: boolean;
    categoria?: boolean;
    titulo?: boolean;
    hora?: boolean;
    ubicacion?: boolean;
    estado?: boolean;
}, ExtArgs["result"]["evento"]>;
export type EventoSelectScalar = {
    id?: boolean;
    fecha?: boolean;
    color?: boolean;
    categoria?: boolean;
    titulo?: boolean;
    hora?: boolean;
    ubicacion?: boolean;
    estado?: boolean;
};
export type EventoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "fecha" | "color" | "categoria" | "titulo" | "hora" | "ubicacion" | "estado", ExtArgs["result"]["evento"]>;
export type $EventoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Evento";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        fecha: Date;
        color: string;
        categoria: string;
        titulo: string;
        hora: string;
        ubicacion: string;
        estado: string;
    }, ExtArgs["result"]["evento"]>;
    composites: {};
};
export type EventoGetPayload<S extends boolean | null | undefined | EventoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EventoPayload, S>;
export type EventoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EventoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EventoCountAggregateInputType | true;
};
export interface EventoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Evento'];
        meta: {
            name: 'Evento';
        };
    };
    findUnique<T extends EventoFindUniqueArgs>(args: Prisma.SelectSubset<T, EventoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EventoClient<runtime.Types.Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EventoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EventoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventoClient<runtime.Types.Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EventoFindFirstArgs>(args?: Prisma.SelectSubset<T, EventoFindFirstArgs<ExtArgs>>): Prisma.Prisma__EventoClient<runtime.Types.Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EventoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EventoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventoClient<runtime.Types.Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EventoFindManyArgs>(args?: Prisma.SelectSubset<T, EventoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EventoCreateArgs>(args: Prisma.SelectSubset<T, EventoCreateArgs<ExtArgs>>): Prisma.Prisma__EventoClient<runtime.Types.Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EventoCreateManyArgs>(args?: Prisma.SelectSubset<T, EventoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EventoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EventoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EventoDeleteArgs>(args: Prisma.SelectSubset<T, EventoDeleteArgs<ExtArgs>>): Prisma.Prisma__EventoClient<runtime.Types.Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EventoUpdateArgs>(args: Prisma.SelectSubset<T, EventoUpdateArgs<ExtArgs>>): Prisma.Prisma__EventoClient<runtime.Types.Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EventoDeleteManyArgs>(args?: Prisma.SelectSubset<T, EventoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EventoUpdateManyArgs>(args: Prisma.SelectSubset<T, EventoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EventoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EventoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EventoUpsertArgs>(args: Prisma.SelectSubset<T, EventoUpsertArgs<ExtArgs>>): Prisma.Prisma__EventoClient<runtime.Types.Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EventoCountArgs>(args?: Prisma.Subset<T, EventoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EventoCountAggregateOutputType> : number>;
    aggregate<T extends EventoAggregateArgs>(args: Prisma.Subset<T, EventoAggregateArgs>): Prisma.PrismaPromise<GetEventoAggregateType<T>>;
    groupBy<T extends EventoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EventoGroupByArgs['orderBy'];
    } : {
        orderBy?: EventoGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EventoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EventoFieldRefs;
}
export interface Prisma__EventoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EventoFieldRefs {
    readonly id: Prisma.FieldRef<"Evento", 'Int'>;
    readonly fecha: Prisma.FieldRef<"Evento", 'DateTime'>;
    readonly color: Prisma.FieldRef<"Evento", 'String'>;
    readonly categoria: Prisma.FieldRef<"Evento", 'String'>;
    readonly titulo: Prisma.FieldRef<"Evento", 'String'>;
    readonly hora: Prisma.FieldRef<"Evento", 'String'>;
    readonly ubicacion: Prisma.FieldRef<"Evento", 'String'>;
    readonly estado: Prisma.FieldRef<"Evento", 'String'>;
}
export type EventoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventoSelect<ExtArgs> | null;
    omit?: Prisma.EventoOmit<ExtArgs> | null;
    where: Prisma.EventoWhereUniqueInput;
};
export type EventoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventoSelect<ExtArgs> | null;
    omit?: Prisma.EventoOmit<ExtArgs> | null;
    where: Prisma.EventoWhereUniqueInput;
};
export type EventoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventoSelect<ExtArgs> | null;
    omit?: Prisma.EventoOmit<ExtArgs> | null;
    where?: Prisma.EventoWhereInput;
    orderBy?: Prisma.EventoOrderByWithRelationInput | Prisma.EventoOrderByWithRelationInput[];
    cursor?: Prisma.EventoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventoScalarFieldEnum | Prisma.EventoScalarFieldEnum[];
};
export type EventoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventoSelect<ExtArgs> | null;
    omit?: Prisma.EventoOmit<ExtArgs> | null;
    where?: Prisma.EventoWhereInput;
    orderBy?: Prisma.EventoOrderByWithRelationInput | Prisma.EventoOrderByWithRelationInput[];
    cursor?: Prisma.EventoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventoScalarFieldEnum | Prisma.EventoScalarFieldEnum[];
};
export type EventoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventoSelect<ExtArgs> | null;
    omit?: Prisma.EventoOmit<ExtArgs> | null;
    where?: Prisma.EventoWhereInput;
    orderBy?: Prisma.EventoOrderByWithRelationInput | Prisma.EventoOrderByWithRelationInput[];
    cursor?: Prisma.EventoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventoScalarFieldEnum | Prisma.EventoScalarFieldEnum[];
};
export type EventoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventoSelect<ExtArgs> | null;
    omit?: Prisma.EventoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EventoCreateInput, Prisma.EventoUncheckedCreateInput>;
};
export type EventoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EventoCreateManyInput | Prisma.EventoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EventoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EventoOmit<ExtArgs> | null;
    data: Prisma.EventoCreateManyInput | Prisma.EventoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EventoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventoSelect<ExtArgs> | null;
    omit?: Prisma.EventoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EventoUpdateInput, Prisma.EventoUncheckedUpdateInput>;
    where: Prisma.EventoWhereUniqueInput;
};
export type EventoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EventoUpdateManyMutationInput, Prisma.EventoUncheckedUpdateManyInput>;
    where?: Prisma.EventoWhereInput;
    limit?: number;
};
export type EventoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EventoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EventoUpdateManyMutationInput, Prisma.EventoUncheckedUpdateManyInput>;
    where?: Prisma.EventoWhereInput;
    limit?: number;
};
export type EventoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventoSelect<ExtArgs> | null;
    omit?: Prisma.EventoOmit<ExtArgs> | null;
    where: Prisma.EventoWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventoCreateInput, Prisma.EventoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EventoUpdateInput, Prisma.EventoUncheckedUpdateInput>;
};
export type EventoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventoSelect<ExtArgs> | null;
    omit?: Prisma.EventoOmit<ExtArgs> | null;
    where: Prisma.EventoWhereUniqueInput;
};
export type EventoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventoWhereInput;
    limit?: number;
};
export type EventoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventoSelect<ExtArgs> | null;
    omit?: Prisma.EventoOmit<ExtArgs> | null;
};
