import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type DocumentoDigitalModel = runtime.Types.Result.DefaultSelection<Prisma.$DocumentoDigitalPayload>;
export type AggregateDocumentoDigital = {
    _count: DocumentoDigitalCountAggregateOutputType | null;
    _avg: DocumentoDigitalAvgAggregateOutputType | null;
    _sum: DocumentoDigitalSumAggregateOutputType | null;
    _min: DocumentoDigitalMinAggregateOutputType | null;
    _max: DocumentoDigitalMaxAggregateOutputType | null;
};
export type DocumentoDigitalAvgAggregateOutputType = {
    id: number | null;
};
export type DocumentoDigitalSumAggregateOutputType = {
    id: number | null;
};
export type DocumentoDigitalMinAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    tipo: string | null;
    peso: string | null;
    fechaActualizacion: Date | null;
    linkDescarga: string | null;
};
export type DocumentoDigitalMaxAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    tipo: string | null;
    peso: string | null;
    fechaActualizacion: Date | null;
    linkDescarga: string | null;
};
export type DocumentoDigitalCountAggregateOutputType = {
    id: number;
    titulo: number;
    tipo: number;
    peso: number;
    fechaActualizacion: number;
    linkDescarga: number;
    _all: number;
};
export type DocumentoDigitalAvgAggregateInputType = {
    id?: true;
};
export type DocumentoDigitalSumAggregateInputType = {
    id?: true;
};
export type DocumentoDigitalMinAggregateInputType = {
    id?: true;
    titulo?: true;
    tipo?: true;
    peso?: true;
    fechaActualizacion?: true;
    linkDescarga?: true;
};
export type DocumentoDigitalMaxAggregateInputType = {
    id?: true;
    titulo?: true;
    tipo?: true;
    peso?: true;
    fechaActualizacion?: true;
    linkDescarga?: true;
};
export type DocumentoDigitalCountAggregateInputType = {
    id?: true;
    titulo?: true;
    tipo?: true;
    peso?: true;
    fechaActualizacion?: true;
    linkDescarga?: true;
    _all?: true;
};
export type DocumentoDigitalAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentoDigitalWhereInput;
    orderBy?: Prisma.DocumentoDigitalOrderByWithRelationInput | Prisma.DocumentoDigitalOrderByWithRelationInput[];
    cursor?: Prisma.DocumentoDigitalWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DocumentoDigitalCountAggregateInputType;
    _avg?: DocumentoDigitalAvgAggregateInputType;
    _sum?: DocumentoDigitalSumAggregateInputType;
    _min?: DocumentoDigitalMinAggregateInputType;
    _max?: DocumentoDigitalMaxAggregateInputType;
};
export type GetDocumentoDigitalAggregateType<T extends DocumentoDigitalAggregateArgs> = {
    [P in keyof T & keyof AggregateDocumentoDigital]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDocumentoDigital[P]> : Prisma.GetScalarType<T[P], AggregateDocumentoDigital[P]>;
};
export type DocumentoDigitalGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentoDigitalWhereInput;
    orderBy?: Prisma.DocumentoDigitalOrderByWithAggregationInput | Prisma.DocumentoDigitalOrderByWithAggregationInput[];
    by: Prisma.DocumentoDigitalScalarFieldEnum[] | Prisma.DocumentoDigitalScalarFieldEnum;
    having?: Prisma.DocumentoDigitalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DocumentoDigitalCountAggregateInputType | true;
    _avg?: DocumentoDigitalAvgAggregateInputType;
    _sum?: DocumentoDigitalSumAggregateInputType;
    _min?: DocumentoDigitalMinAggregateInputType;
    _max?: DocumentoDigitalMaxAggregateInputType;
};
export type DocumentoDigitalGroupByOutputType = {
    id: number;
    titulo: string | null;
    tipo: string | null;
    peso: string | null;
    fechaActualizacion: Date | null;
    linkDescarga: string | null;
    _count: DocumentoDigitalCountAggregateOutputType | null;
    _avg: DocumentoDigitalAvgAggregateOutputType | null;
    _sum: DocumentoDigitalSumAggregateOutputType | null;
    _min: DocumentoDigitalMinAggregateOutputType | null;
    _max: DocumentoDigitalMaxAggregateOutputType | null;
};
export type GetDocumentoDigitalGroupByPayload<T extends DocumentoDigitalGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DocumentoDigitalGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DocumentoDigitalGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DocumentoDigitalGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DocumentoDigitalGroupByOutputType[P]>;
}>>;
export type DocumentoDigitalWhereInput = {
    AND?: Prisma.DocumentoDigitalWhereInput | Prisma.DocumentoDigitalWhereInput[];
    OR?: Prisma.DocumentoDigitalWhereInput[];
    NOT?: Prisma.DocumentoDigitalWhereInput | Prisma.DocumentoDigitalWhereInput[];
    id?: Prisma.IntFilter<"DocumentoDigital"> | number;
    titulo?: Prisma.StringNullableFilter<"DocumentoDigital"> | string | null;
    tipo?: Prisma.StringNullableFilter<"DocumentoDigital"> | string | null;
    peso?: Prisma.StringNullableFilter<"DocumentoDigital"> | string | null;
    fechaActualizacion?: Prisma.DateTimeNullableFilter<"DocumentoDigital"> | Date | string | null;
    linkDescarga?: Prisma.StringNullableFilter<"DocumentoDigital"> | string | null;
};
export type DocumentoDigitalOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    peso?: Prisma.SortOrderInput | Prisma.SortOrder;
    fechaActualizacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    linkDescarga?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type DocumentoDigitalWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.DocumentoDigitalWhereInput | Prisma.DocumentoDigitalWhereInput[];
    OR?: Prisma.DocumentoDigitalWhereInput[];
    NOT?: Prisma.DocumentoDigitalWhereInput | Prisma.DocumentoDigitalWhereInput[];
    titulo?: Prisma.StringNullableFilter<"DocumentoDigital"> | string | null;
    tipo?: Prisma.StringNullableFilter<"DocumentoDigital"> | string | null;
    peso?: Prisma.StringNullableFilter<"DocumentoDigital"> | string | null;
    fechaActualizacion?: Prisma.DateTimeNullableFilter<"DocumentoDigital"> | Date | string | null;
    linkDescarga?: Prisma.StringNullableFilter<"DocumentoDigital"> | string | null;
}, "id">;
export type DocumentoDigitalOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    peso?: Prisma.SortOrderInput | Prisma.SortOrder;
    fechaActualizacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    linkDescarga?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.DocumentoDigitalCountOrderByAggregateInput;
    _avg?: Prisma.DocumentoDigitalAvgOrderByAggregateInput;
    _max?: Prisma.DocumentoDigitalMaxOrderByAggregateInput;
    _min?: Prisma.DocumentoDigitalMinOrderByAggregateInput;
    _sum?: Prisma.DocumentoDigitalSumOrderByAggregateInput;
};
export type DocumentoDigitalScalarWhereWithAggregatesInput = {
    AND?: Prisma.DocumentoDigitalScalarWhereWithAggregatesInput | Prisma.DocumentoDigitalScalarWhereWithAggregatesInput[];
    OR?: Prisma.DocumentoDigitalScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DocumentoDigitalScalarWhereWithAggregatesInput | Prisma.DocumentoDigitalScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"DocumentoDigital"> | number;
    titulo?: Prisma.StringNullableWithAggregatesFilter<"DocumentoDigital"> | string | null;
    tipo?: Prisma.StringNullableWithAggregatesFilter<"DocumentoDigital"> | string | null;
    peso?: Prisma.StringNullableWithAggregatesFilter<"DocumentoDigital"> | string | null;
    fechaActualizacion?: Prisma.DateTimeNullableWithAggregatesFilter<"DocumentoDigital"> | Date | string | null;
    linkDescarga?: Prisma.StringNullableWithAggregatesFilter<"DocumentoDigital"> | string | null;
};
export type DocumentoDigitalCreateInput = {
    titulo?: string | null;
    tipo?: string | null;
    peso?: string | null;
    fechaActualizacion?: Date | string | null;
    linkDescarga?: string | null;
};
export type DocumentoDigitalUncheckedCreateInput = {
    id?: number;
    titulo?: string | null;
    tipo?: string | null;
    peso?: string | null;
    fechaActualizacion?: Date | string | null;
    linkDescarga?: string | null;
};
export type DocumentoDigitalUpdateInput = {
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    peso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaActualizacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    linkDescarga?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DocumentoDigitalUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    peso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaActualizacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    linkDescarga?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DocumentoDigitalCreateManyInput = {
    id?: number;
    titulo?: string | null;
    tipo?: string | null;
    peso?: string | null;
    fechaActualizacion?: Date | string | null;
    linkDescarga?: string | null;
};
export type DocumentoDigitalUpdateManyMutationInput = {
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    peso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaActualizacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    linkDescarga?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DocumentoDigitalUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    peso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaActualizacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    linkDescarga?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DocumentoDigitalCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    peso?: Prisma.SortOrder;
    fechaActualizacion?: Prisma.SortOrder;
    linkDescarga?: Prisma.SortOrder;
};
export type DocumentoDigitalAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type DocumentoDigitalMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    peso?: Prisma.SortOrder;
    fechaActualizacion?: Prisma.SortOrder;
    linkDescarga?: Prisma.SortOrder;
};
export type DocumentoDigitalMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    peso?: Prisma.SortOrder;
    fechaActualizacion?: Prisma.SortOrder;
    linkDescarga?: Prisma.SortOrder;
};
export type DocumentoDigitalSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type DocumentoDigitalSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    tipo?: boolean;
    peso?: boolean;
    fechaActualizacion?: boolean;
    linkDescarga?: boolean;
}, ExtArgs["result"]["documentoDigital"]>;
export type DocumentoDigitalSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    tipo?: boolean;
    peso?: boolean;
    fechaActualizacion?: boolean;
    linkDescarga?: boolean;
}, ExtArgs["result"]["documentoDigital"]>;
export type DocumentoDigitalSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    tipo?: boolean;
    peso?: boolean;
    fechaActualizacion?: boolean;
    linkDescarga?: boolean;
}, ExtArgs["result"]["documentoDigital"]>;
export type DocumentoDigitalSelectScalar = {
    id?: boolean;
    titulo?: boolean;
    tipo?: boolean;
    peso?: boolean;
    fechaActualizacion?: boolean;
    linkDescarga?: boolean;
};
export type DocumentoDigitalOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "titulo" | "tipo" | "peso" | "fechaActualizacion" | "linkDescarga", ExtArgs["result"]["documentoDigital"]>;
export type $DocumentoDigitalPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DocumentoDigital";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        titulo: string | null;
        tipo: string | null;
        peso: string | null;
        fechaActualizacion: Date | null;
        linkDescarga: string | null;
    }, ExtArgs["result"]["documentoDigital"]>;
    composites: {};
};
export type DocumentoDigitalGetPayload<S extends boolean | null | undefined | DocumentoDigitalDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DocumentoDigitalPayload, S>;
export type DocumentoDigitalCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DocumentoDigitalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DocumentoDigitalCountAggregateInputType | true;
};
export interface DocumentoDigitalDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DocumentoDigital'];
        meta: {
            name: 'DocumentoDigital';
        };
    };
    findUnique<T extends DocumentoDigitalFindUniqueArgs>(args: Prisma.SelectSubset<T, DocumentoDigitalFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DocumentoDigitalClient<runtime.Types.Result.GetResult<Prisma.$DocumentoDigitalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DocumentoDigitalFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DocumentoDigitalFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentoDigitalClient<runtime.Types.Result.GetResult<Prisma.$DocumentoDigitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DocumentoDigitalFindFirstArgs>(args?: Prisma.SelectSubset<T, DocumentoDigitalFindFirstArgs<ExtArgs>>): Prisma.Prisma__DocumentoDigitalClient<runtime.Types.Result.GetResult<Prisma.$DocumentoDigitalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DocumentoDigitalFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DocumentoDigitalFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentoDigitalClient<runtime.Types.Result.GetResult<Prisma.$DocumentoDigitalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DocumentoDigitalFindManyArgs>(args?: Prisma.SelectSubset<T, DocumentoDigitalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentoDigitalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DocumentoDigitalCreateArgs>(args: Prisma.SelectSubset<T, DocumentoDigitalCreateArgs<ExtArgs>>): Prisma.Prisma__DocumentoDigitalClient<runtime.Types.Result.GetResult<Prisma.$DocumentoDigitalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DocumentoDigitalCreateManyArgs>(args?: Prisma.SelectSubset<T, DocumentoDigitalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DocumentoDigitalCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DocumentoDigitalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentoDigitalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DocumentoDigitalDeleteArgs>(args: Prisma.SelectSubset<T, DocumentoDigitalDeleteArgs<ExtArgs>>): Prisma.Prisma__DocumentoDigitalClient<runtime.Types.Result.GetResult<Prisma.$DocumentoDigitalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DocumentoDigitalUpdateArgs>(args: Prisma.SelectSubset<T, DocumentoDigitalUpdateArgs<ExtArgs>>): Prisma.Prisma__DocumentoDigitalClient<runtime.Types.Result.GetResult<Prisma.$DocumentoDigitalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DocumentoDigitalDeleteManyArgs>(args?: Prisma.SelectSubset<T, DocumentoDigitalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DocumentoDigitalUpdateManyArgs>(args: Prisma.SelectSubset<T, DocumentoDigitalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DocumentoDigitalUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DocumentoDigitalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentoDigitalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DocumentoDigitalUpsertArgs>(args: Prisma.SelectSubset<T, DocumentoDigitalUpsertArgs<ExtArgs>>): Prisma.Prisma__DocumentoDigitalClient<runtime.Types.Result.GetResult<Prisma.$DocumentoDigitalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DocumentoDigitalCountArgs>(args?: Prisma.Subset<T, DocumentoDigitalCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DocumentoDigitalCountAggregateOutputType> : number>;
    aggregate<T extends DocumentoDigitalAggregateArgs>(args: Prisma.Subset<T, DocumentoDigitalAggregateArgs>): Prisma.PrismaPromise<GetDocumentoDigitalAggregateType<T>>;
    groupBy<T extends DocumentoDigitalGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DocumentoDigitalGroupByArgs['orderBy'];
    } : {
        orderBy?: DocumentoDigitalGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DocumentoDigitalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentoDigitalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DocumentoDigitalFieldRefs;
}
export interface Prisma__DocumentoDigitalClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DocumentoDigitalFieldRefs {
    readonly id: Prisma.FieldRef<"DocumentoDigital", 'Int'>;
    readonly titulo: Prisma.FieldRef<"DocumentoDigital", 'String'>;
    readonly tipo: Prisma.FieldRef<"DocumentoDigital", 'String'>;
    readonly peso: Prisma.FieldRef<"DocumentoDigital", 'String'>;
    readonly fechaActualizacion: Prisma.FieldRef<"DocumentoDigital", 'DateTime'>;
    readonly linkDescarga: Prisma.FieldRef<"DocumentoDigital", 'String'>;
}
export type DocumentoDigitalFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentoDigitalSelect<ExtArgs> | null;
    omit?: Prisma.DocumentoDigitalOmit<ExtArgs> | null;
    where: Prisma.DocumentoDigitalWhereUniqueInput;
};
export type DocumentoDigitalFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentoDigitalSelect<ExtArgs> | null;
    omit?: Prisma.DocumentoDigitalOmit<ExtArgs> | null;
    where: Prisma.DocumentoDigitalWhereUniqueInput;
};
export type DocumentoDigitalFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentoDigitalSelect<ExtArgs> | null;
    omit?: Prisma.DocumentoDigitalOmit<ExtArgs> | null;
    where?: Prisma.DocumentoDigitalWhereInput;
    orderBy?: Prisma.DocumentoDigitalOrderByWithRelationInput | Prisma.DocumentoDigitalOrderByWithRelationInput[];
    cursor?: Prisma.DocumentoDigitalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentoDigitalScalarFieldEnum | Prisma.DocumentoDigitalScalarFieldEnum[];
};
export type DocumentoDigitalFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentoDigitalSelect<ExtArgs> | null;
    omit?: Prisma.DocumentoDigitalOmit<ExtArgs> | null;
    where?: Prisma.DocumentoDigitalWhereInput;
    orderBy?: Prisma.DocumentoDigitalOrderByWithRelationInput | Prisma.DocumentoDigitalOrderByWithRelationInput[];
    cursor?: Prisma.DocumentoDigitalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentoDigitalScalarFieldEnum | Prisma.DocumentoDigitalScalarFieldEnum[];
};
export type DocumentoDigitalFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentoDigitalSelect<ExtArgs> | null;
    omit?: Prisma.DocumentoDigitalOmit<ExtArgs> | null;
    where?: Prisma.DocumentoDigitalWhereInput;
    orderBy?: Prisma.DocumentoDigitalOrderByWithRelationInput | Prisma.DocumentoDigitalOrderByWithRelationInput[];
    cursor?: Prisma.DocumentoDigitalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentoDigitalScalarFieldEnum | Prisma.DocumentoDigitalScalarFieldEnum[];
};
export type DocumentoDigitalCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentoDigitalSelect<ExtArgs> | null;
    omit?: Prisma.DocumentoDigitalOmit<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.DocumentoDigitalCreateInput, Prisma.DocumentoDigitalUncheckedCreateInput>;
};
export type DocumentoDigitalCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DocumentoDigitalCreateManyInput | Prisma.DocumentoDigitalCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DocumentoDigitalCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentoDigitalSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocumentoDigitalOmit<ExtArgs> | null;
    data: Prisma.DocumentoDigitalCreateManyInput | Prisma.DocumentoDigitalCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DocumentoDigitalUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentoDigitalSelect<ExtArgs> | null;
    omit?: Prisma.DocumentoDigitalOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentoDigitalUpdateInput, Prisma.DocumentoDigitalUncheckedUpdateInput>;
    where: Prisma.DocumentoDigitalWhereUniqueInput;
};
export type DocumentoDigitalUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DocumentoDigitalUpdateManyMutationInput, Prisma.DocumentoDigitalUncheckedUpdateManyInput>;
    where?: Prisma.DocumentoDigitalWhereInput;
    limit?: number;
};
export type DocumentoDigitalUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentoDigitalSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocumentoDigitalOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentoDigitalUpdateManyMutationInput, Prisma.DocumentoDigitalUncheckedUpdateManyInput>;
    where?: Prisma.DocumentoDigitalWhereInput;
    limit?: number;
};
export type DocumentoDigitalUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentoDigitalSelect<ExtArgs> | null;
    omit?: Prisma.DocumentoDigitalOmit<ExtArgs> | null;
    where: Prisma.DocumentoDigitalWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentoDigitalCreateInput, Prisma.DocumentoDigitalUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DocumentoDigitalUpdateInput, Prisma.DocumentoDigitalUncheckedUpdateInput>;
};
export type DocumentoDigitalDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentoDigitalSelect<ExtArgs> | null;
    omit?: Prisma.DocumentoDigitalOmit<ExtArgs> | null;
    where: Prisma.DocumentoDigitalWhereUniqueInput;
};
export type DocumentoDigitalDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentoDigitalWhereInput;
    limit?: number;
};
export type DocumentoDigitalDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentoDigitalSelect<ExtArgs> | null;
    omit?: Prisma.DocumentoDigitalOmit<ExtArgs> | null;
};
