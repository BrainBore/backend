import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ConvocatoriaModel = runtime.Types.Result.DefaultSelection<Prisma.$ConvocatoriaPayload>;
export type AggregateConvocatoria = {
    _count: ConvocatoriaCountAggregateOutputType | null;
    _avg: ConvocatoriaAvgAggregateOutputType | null;
    _sum: ConvocatoriaSumAggregateOutputType | null;
    _min: ConvocatoriaMinAggregateOutputType | null;
    _max: ConvocatoriaMaxAggregateOutputType | null;
};
export type ConvocatoriaAvgAggregateOutputType = {
    idConvocatoria: number | null;
};
export type ConvocatoriaSumAggregateOutputType = {
    idConvocatoria: number | null;
};
export type ConvocatoriaMinAggregateOutputType = {
    idConvocatoria: number | null;
    periodoConvocatoria: string | null;
    descConvocatoria: string | null;
    insPreu: string | null;
    insPsa: string | null;
    fechaEntregaDocs: Date | null;
    matriculacionKardex: string | null;
};
export type ConvocatoriaMaxAggregateOutputType = {
    idConvocatoria: number | null;
    periodoConvocatoria: string | null;
    descConvocatoria: string | null;
    insPreu: string | null;
    insPsa: string | null;
    fechaEntregaDocs: Date | null;
    matriculacionKardex: string | null;
};
export type ConvocatoriaCountAggregateOutputType = {
    idConvocatoria: number;
    periodoConvocatoria: number;
    descConvocatoria: number;
    insPreu: number;
    insPsa: number;
    fechaEntregaDocs: number;
    matriculacionKardex: number;
    _all: number;
};
export type ConvocatoriaAvgAggregateInputType = {
    idConvocatoria?: true;
};
export type ConvocatoriaSumAggregateInputType = {
    idConvocatoria?: true;
};
export type ConvocatoriaMinAggregateInputType = {
    idConvocatoria?: true;
    periodoConvocatoria?: true;
    descConvocatoria?: true;
    insPreu?: true;
    insPsa?: true;
    fechaEntregaDocs?: true;
    matriculacionKardex?: true;
};
export type ConvocatoriaMaxAggregateInputType = {
    idConvocatoria?: true;
    periodoConvocatoria?: true;
    descConvocatoria?: true;
    insPreu?: true;
    insPsa?: true;
    fechaEntregaDocs?: true;
    matriculacionKardex?: true;
};
export type ConvocatoriaCountAggregateInputType = {
    idConvocatoria?: true;
    periodoConvocatoria?: true;
    descConvocatoria?: true;
    insPreu?: true;
    insPsa?: true;
    fechaEntregaDocs?: true;
    matriculacionKardex?: true;
    _all?: true;
};
export type ConvocatoriaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConvocatoriaWhereInput;
    orderBy?: Prisma.ConvocatoriaOrderByWithRelationInput | Prisma.ConvocatoriaOrderByWithRelationInput[];
    cursor?: Prisma.ConvocatoriaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ConvocatoriaCountAggregateInputType;
    _avg?: ConvocatoriaAvgAggregateInputType;
    _sum?: ConvocatoriaSumAggregateInputType;
    _min?: ConvocatoriaMinAggregateInputType;
    _max?: ConvocatoriaMaxAggregateInputType;
};
export type GetConvocatoriaAggregateType<T extends ConvocatoriaAggregateArgs> = {
    [P in keyof T & keyof AggregateConvocatoria]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConvocatoria[P]> : Prisma.GetScalarType<T[P], AggregateConvocatoria[P]>;
};
export type ConvocatoriaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConvocatoriaWhereInput;
    orderBy?: Prisma.ConvocatoriaOrderByWithAggregationInput | Prisma.ConvocatoriaOrderByWithAggregationInput[];
    by: Prisma.ConvocatoriaScalarFieldEnum[] | Prisma.ConvocatoriaScalarFieldEnum;
    having?: Prisma.ConvocatoriaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConvocatoriaCountAggregateInputType | true;
    _avg?: ConvocatoriaAvgAggregateInputType;
    _sum?: ConvocatoriaSumAggregateInputType;
    _min?: ConvocatoriaMinAggregateInputType;
    _max?: ConvocatoriaMaxAggregateInputType;
};
export type ConvocatoriaGroupByOutputType = {
    idConvocatoria: number;
    periodoConvocatoria: string;
    descConvocatoria: string;
    insPreu: string;
    insPsa: string;
    fechaEntregaDocs: Date;
    matriculacionKardex: string;
    _count: ConvocatoriaCountAggregateOutputType | null;
    _avg: ConvocatoriaAvgAggregateOutputType | null;
    _sum: ConvocatoriaSumAggregateOutputType | null;
    _min: ConvocatoriaMinAggregateOutputType | null;
    _max: ConvocatoriaMaxAggregateOutputType | null;
};
export type GetConvocatoriaGroupByPayload<T extends ConvocatoriaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ConvocatoriaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ConvocatoriaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ConvocatoriaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ConvocatoriaGroupByOutputType[P]>;
}>>;
export type ConvocatoriaWhereInput = {
    AND?: Prisma.ConvocatoriaWhereInput | Prisma.ConvocatoriaWhereInput[];
    OR?: Prisma.ConvocatoriaWhereInput[];
    NOT?: Prisma.ConvocatoriaWhereInput | Prisma.ConvocatoriaWhereInput[];
    idConvocatoria?: Prisma.IntFilter<"Convocatoria"> | number;
    periodoConvocatoria?: Prisma.StringFilter<"Convocatoria"> | string;
    descConvocatoria?: Prisma.StringFilter<"Convocatoria"> | string;
    insPreu?: Prisma.StringFilter<"Convocatoria"> | string;
    insPsa?: Prisma.StringFilter<"Convocatoria"> | string;
    fechaEntregaDocs?: Prisma.DateTimeFilter<"Convocatoria"> | Date | string;
    matriculacionKardex?: Prisma.StringFilter<"Convocatoria"> | string;
};
export type ConvocatoriaOrderByWithRelationInput = {
    idConvocatoria?: Prisma.SortOrder;
    periodoConvocatoria?: Prisma.SortOrder;
    descConvocatoria?: Prisma.SortOrder;
    insPreu?: Prisma.SortOrder;
    insPsa?: Prisma.SortOrder;
    fechaEntregaDocs?: Prisma.SortOrder;
    matriculacionKardex?: Prisma.SortOrder;
};
export type ConvocatoriaWhereUniqueInput = Prisma.AtLeast<{
    idConvocatoria?: number;
    AND?: Prisma.ConvocatoriaWhereInput | Prisma.ConvocatoriaWhereInput[];
    OR?: Prisma.ConvocatoriaWhereInput[];
    NOT?: Prisma.ConvocatoriaWhereInput | Prisma.ConvocatoriaWhereInput[];
    periodoConvocatoria?: Prisma.StringFilter<"Convocatoria"> | string;
    descConvocatoria?: Prisma.StringFilter<"Convocatoria"> | string;
    insPreu?: Prisma.StringFilter<"Convocatoria"> | string;
    insPsa?: Prisma.StringFilter<"Convocatoria"> | string;
    fechaEntregaDocs?: Prisma.DateTimeFilter<"Convocatoria"> | Date | string;
    matriculacionKardex?: Prisma.StringFilter<"Convocatoria"> | string;
}, "idConvocatoria">;
export type ConvocatoriaOrderByWithAggregationInput = {
    idConvocatoria?: Prisma.SortOrder;
    periodoConvocatoria?: Prisma.SortOrder;
    descConvocatoria?: Prisma.SortOrder;
    insPreu?: Prisma.SortOrder;
    insPsa?: Prisma.SortOrder;
    fechaEntregaDocs?: Prisma.SortOrder;
    matriculacionKardex?: Prisma.SortOrder;
    _count?: Prisma.ConvocatoriaCountOrderByAggregateInput;
    _avg?: Prisma.ConvocatoriaAvgOrderByAggregateInput;
    _max?: Prisma.ConvocatoriaMaxOrderByAggregateInput;
    _min?: Prisma.ConvocatoriaMinOrderByAggregateInput;
    _sum?: Prisma.ConvocatoriaSumOrderByAggregateInput;
};
export type ConvocatoriaScalarWhereWithAggregatesInput = {
    AND?: Prisma.ConvocatoriaScalarWhereWithAggregatesInput | Prisma.ConvocatoriaScalarWhereWithAggregatesInput[];
    OR?: Prisma.ConvocatoriaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ConvocatoriaScalarWhereWithAggregatesInput | Prisma.ConvocatoriaScalarWhereWithAggregatesInput[];
    idConvocatoria?: Prisma.IntWithAggregatesFilter<"Convocatoria"> | number;
    periodoConvocatoria?: Prisma.StringWithAggregatesFilter<"Convocatoria"> | string;
    descConvocatoria?: Prisma.StringWithAggregatesFilter<"Convocatoria"> | string;
    insPreu?: Prisma.StringWithAggregatesFilter<"Convocatoria"> | string;
    insPsa?: Prisma.StringWithAggregatesFilter<"Convocatoria"> | string;
    fechaEntregaDocs?: Prisma.DateTimeWithAggregatesFilter<"Convocatoria"> | Date | string;
    matriculacionKardex?: Prisma.StringWithAggregatesFilter<"Convocatoria"> | string;
};
export type ConvocatoriaCreateInput = {
    periodoConvocatoria: string;
    descConvocatoria: string;
    insPreu: string;
    insPsa: string;
    fechaEntregaDocs: Date | string;
    matriculacionKardex: string;
};
export type ConvocatoriaUncheckedCreateInput = {
    idConvocatoria?: number;
    periodoConvocatoria: string;
    descConvocatoria: string;
    insPreu: string;
    insPsa: string;
    fechaEntregaDocs: Date | string;
    matriculacionKardex: string;
};
export type ConvocatoriaUpdateInput = {
    periodoConvocatoria?: Prisma.StringFieldUpdateOperationsInput | string;
    descConvocatoria?: Prisma.StringFieldUpdateOperationsInput | string;
    insPreu?: Prisma.StringFieldUpdateOperationsInput | string;
    insPsa?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaEntregaDocs?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matriculacionKardex?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ConvocatoriaUncheckedUpdateInput = {
    idConvocatoria?: Prisma.IntFieldUpdateOperationsInput | number;
    periodoConvocatoria?: Prisma.StringFieldUpdateOperationsInput | string;
    descConvocatoria?: Prisma.StringFieldUpdateOperationsInput | string;
    insPreu?: Prisma.StringFieldUpdateOperationsInput | string;
    insPsa?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaEntregaDocs?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matriculacionKardex?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ConvocatoriaCreateManyInput = {
    idConvocatoria?: number;
    periodoConvocatoria: string;
    descConvocatoria: string;
    insPreu: string;
    insPsa: string;
    fechaEntregaDocs: Date | string;
    matriculacionKardex: string;
};
export type ConvocatoriaUpdateManyMutationInput = {
    periodoConvocatoria?: Prisma.StringFieldUpdateOperationsInput | string;
    descConvocatoria?: Prisma.StringFieldUpdateOperationsInput | string;
    insPreu?: Prisma.StringFieldUpdateOperationsInput | string;
    insPsa?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaEntregaDocs?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matriculacionKardex?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ConvocatoriaUncheckedUpdateManyInput = {
    idConvocatoria?: Prisma.IntFieldUpdateOperationsInput | number;
    periodoConvocatoria?: Prisma.StringFieldUpdateOperationsInput | string;
    descConvocatoria?: Prisma.StringFieldUpdateOperationsInput | string;
    insPreu?: Prisma.StringFieldUpdateOperationsInput | string;
    insPsa?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaEntregaDocs?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matriculacionKardex?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ConvocatoriaCountOrderByAggregateInput = {
    idConvocatoria?: Prisma.SortOrder;
    periodoConvocatoria?: Prisma.SortOrder;
    descConvocatoria?: Prisma.SortOrder;
    insPreu?: Prisma.SortOrder;
    insPsa?: Prisma.SortOrder;
    fechaEntregaDocs?: Prisma.SortOrder;
    matriculacionKardex?: Prisma.SortOrder;
};
export type ConvocatoriaAvgOrderByAggregateInput = {
    idConvocatoria?: Prisma.SortOrder;
};
export type ConvocatoriaMaxOrderByAggregateInput = {
    idConvocatoria?: Prisma.SortOrder;
    periodoConvocatoria?: Prisma.SortOrder;
    descConvocatoria?: Prisma.SortOrder;
    insPreu?: Prisma.SortOrder;
    insPsa?: Prisma.SortOrder;
    fechaEntregaDocs?: Prisma.SortOrder;
    matriculacionKardex?: Prisma.SortOrder;
};
export type ConvocatoriaMinOrderByAggregateInput = {
    idConvocatoria?: Prisma.SortOrder;
    periodoConvocatoria?: Prisma.SortOrder;
    descConvocatoria?: Prisma.SortOrder;
    insPreu?: Prisma.SortOrder;
    insPsa?: Prisma.SortOrder;
    fechaEntregaDocs?: Prisma.SortOrder;
    matriculacionKardex?: Prisma.SortOrder;
};
export type ConvocatoriaSumOrderByAggregateInput = {
    idConvocatoria?: Prisma.SortOrder;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type ConvocatoriaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idConvocatoria?: boolean;
    periodoConvocatoria?: boolean;
    descConvocatoria?: boolean;
    insPreu?: boolean;
    insPsa?: boolean;
    fechaEntregaDocs?: boolean;
    matriculacionKardex?: boolean;
}, ExtArgs["result"]["convocatoria"]>;
export type ConvocatoriaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idConvocatoria?: boolean;
    periodoConvocatoria?: boolean;
    descConvocatoria?: boolean;
    insPreu?: boolean;
    insPsa?: boolean;
    fechaEntregaDocs?: boolean;
    matriculacionKardex?: boolean;
}, ExtArgs["result"]["convocatoria"]>;
export type ConvocatoriaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idConvocatoria?: boolean;
    periodoConvocatoria?: boolean;
    descConvocatoria?: boolean;
    insPreu?: boolean;
    insPsa?: boolean;
    fechaEntregaDocs?: boolean;
    matriculacionKardex?: boolean;
}, ExtArgs["result"]["convocatoria"]>;
export type ConvocatoriaSelectScalar = {
    idConvocatoria?: boolean;
    periodoConvocatoria?: boolean;
    descConvocatoria?: boolean;
    insPreu?: boolean;
    insPsa?: boolean;
    fechaEntregaDocs?: boolean;
    matriculacionKardex?: boolean;
};
export type ConvocatoriaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"idConvocatoria" | "periodoConvocatoria" | "descConvocatoria" | "insPreu" | "insPsa" | "fechaEntregaDocs" | "matriculacionKardex", ExtArgs["result"]["convocatoria"]>;
export type $ConvocatoriaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Convocatoria";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        idConvocatoria: number;
        periodoConvocatoria: string;
        descConvocatoria: string;
        insPreu: string;
        insPsa: string;
        fechaEntregaDocs: Date;
        matriculacionKardex: string;
    }, ExtArgs["result"]["convocatoria"]>;
    composites: {};
};
export type ConvocatoriaGetPayload<S extends boolean | null | undefined | ConvocatoriaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ConvocatoriaPayload, S>;
export type ConvocatoriaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ConvocatoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ConvocatoriaCountAggregateInputType | true;
};
export interface ConvocatoriaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Convocatoria'];
        meta: {
            name: 'Convocatoria';
        };
    };
    findUnique<T extends ConvocatoriaFindUniqueArgs>(args: Prisma.SelectSubset<T, ConvocatoriaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ConvocatoriaClient<runtime.Types.Result.GetResult<Prisma.$ConvocatoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ConvocatoriaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ConvocatoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConvocatoriaClient<runtime.Types.Result.GetResult<Prisma.$ConvocatoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ConvocatoriaFindFirstArgs>(args?: Prisma.SelectSubset<T, ConvocatoriaFindFirstArgs<ExtArgs>>): Prisma.Prisma__ConvocatoriaClient<runtime.Types.Result.GetResult<Prisma.$ConvocatoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ConvocatoriaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ConvocatoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConvocatoriaClient<runtime.Types.Result.GetResult<Prisma.$ConvocatoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ConvocatoriaFindManyArgs>(args?: Prisma.SelectSubset<T, ConvocatoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConvocatoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ConvocatoriaCreateArgs>(args: Prisma.SelectSubset<T, ConvocatoriaCreateArgs<ExtArgs>>): Prisma.Prisma__ConvocatoriaClient<runtime.Types.Result.GetResult<Prisma.$ConvocatoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ConvocatoriaCreateManyArgs>(args?: Prisma.SelectSubset<T, ConvocatoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ConvocatoriaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ConvocatoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConvocatoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ConvocatoriaDeleteArgs>(args: Prisma.SelectSubset<T, ConvocatoriaDeleteArgs<ExtArgs>>): Prisma.Prisma__ConvocatoriaClient<runtime.Types.Result.GetResult<Prisma.$ConvocatoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ConvocatoriaUpdateArgs>(args: Prisma.SelectSubset<T, ConvocatoriaUpdateArgs<ExtArgs>>): Prisma.Prisma__ConvocatoriaClient<runtime.Types.Result.GetResult<Prisma.$ConvocatoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ConvocatoriaDeleteManyArgs>(args?: Prisma.SelectSubset<T, ConvocatoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ConvocatoriaUpdateManyArgs>(args: Prisma.SelectSubset<T, ConvocatoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ConvocatoriaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ConvocatoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConvocatoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ConvocatoriaUpsertArgs>(args: Prisma.SelectSubset<T, ConvocatoriaUpsertArgs<ExtArgs>>): Prisma.Prisma__ConvocatoriaClient<runtime.Types.Result.GetResult<Prisma.$ConvocatoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ConvocatoriaCountArgs>(args?: Prisma.Subset<T, ConvocatoriaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ConvocatoriaCountAggregateOutputType> : number>;
    aggregate<T extends ConvocatoriaAggregateArgs>(args: Prisma.Subset<T, ConvocatoriaAggregateArgs>): Prisma.PrismaPromise<GetConvocatoriaAggregateType<T>>;
    groupBy<T extends ConvocatoriaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ConvocatoriaGroupByArgs['orderBy'];
    } : {
        orderBy?: ConvocatoriaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ConvocatoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConvocatoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ConvocatoriaFieldRefs;
}
export interface Prisma__ConvocatoriaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ConvocatoriaFieldRefs {
    readonly idConvocatoria: Prisma.FieldRef<"Convocatoria", 'Int'>;
    readonly periodoConvocatoria: Prisma.FieldRef<"Convocatoria", 'String'>;
    readonly descConvocatoria: Prisma.FieldRef<"Convocatoria", 'String'>;
    readonly insPreu: Prisma.FieldRef<"Convocatoria", 'String'>;
    readonly insPsa: Prisma.FieldRef<"Convocatoria", 'String'>;
    readonly fechaEntregaDocs: Prisma.FieldRef<"Convocatoria", 'DateTime'>;
    readonly matriculacionKardex: Prisma.FieldRef<"Convocatoria", 'String'>;
}
export type ConvocatoriaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvocatoriaSelect<ExtArgs> | null;
    omit?: Prisma.ConvocatoriaOmit<ExtArgs> | null;
    where: Prisma.ConvocatoriaWhereUniqueInput;
};
export type ConvocatoriaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvocatoriaSelect<ExtArgs> | null;
    omit?: Prisma.ConvocatoriaOmit<ExtArgs> | null;
    where: Prisma.ConvocatoriaWhereUniqueInput;
};
export type ConvocatoriaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvocatoriaSelect<ExtArgs> | null;
    omit?: Prisma.ConvocatoriaOmit<ExtArgs> | null;
    where?: Prisma.ConvocatoriaWhereInput;
    orderBy?: Prisma.ConvocatoriaOrderByWithRelationInput | Prisma.ConvocatoriaOrderByWithRelationInput[];
    cursor?: Prisma.ConvocatoriaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConvocatoriaScalarFieldEnum | Prisma.ConvocatoriaScalarFieldEnum[];
};
export type ConvocatoriaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvocatoriaSelect<ExtArgs> | null;
    omit?: Prisma.ConvocatoriaOmit<ExtArgs> | null;
    where?: Prisma.ConvocatoriaWhereInput;
    orderBy?: Prisma.ConvocatoriaOrderByWithRelationInput | Prisma.ConvocatoriaOrderByWithRelationInput[];
    cursor?: Prisma.ConvocatoriaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConvocatoriaScalarFieldEnum | Prisma.ConvocatoriaScalarFieldEnum[];
};
export type ConvocatoriaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvocatoriaSelect<ExtArgs> | null;
    omit?: Prisma.ConvocatoriaOmit<ExtArgs> | null;
    where?: Prisma.ConvocatoriaWhereInput;
    orderBy?: Prisma.ConvocatoriaOrderByWithRelationInput | Prisma.ConvocatoriaOrderByWithRelationInput[];
    cursor?: Prisma.ConvocatoriaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConvocatoriaScalarFieldEnum | Prisma.ConvocatoriaScalarFieldEnum[];
};
export type ConvocatoriaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvocatoriaSelect<ExtArgs> | null;
    omit?: Prisma.ConvocatoriaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConvocatoriaCreateInput, Prisma.ConvocatoriaUncheckedCreateInput>;
};
export type ConvocatoriaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ConvocatoriaCreateManyInput | Prisma.ConvocatoriaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ConvocatoriaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvocatoriaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConvocatoriaOmit<ExtArgs> | null;
    data: Prisma.ConvocatoriaCreateManyInput | Prisma.ConvocatoriaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ConvocatoriaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvocatoriaSelect<ExtArgs> | null;
    omit?: Prisma.ConvocatoriaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConvocatoriaUpdateInput, Prisma.ConvocatoriaUncheckedUpdateInput>;
    where: Prisma.ConvocatoriaWhereUniqueInput;
};
export type ConvocatoriaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ConvocatoriaUpdateManyMutationInput, Prisma.ConvocatoriaUncheckedUpdateManyInput>;
    where?: Prisma.ConvocatoriaWhereInput;
    limit?: number;
};
export type ConvocatoriaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvocatoriaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConvocatoriaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConvocatoriaUpdateManyMutationInput, Prisma.ConvocatoriaUncheckedUpdateManyInput>;
    where?: Prisma.ConvocatoriaWhereInput;
    limit?: number;
};
export type ConvocatoriaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvocatoriaSelect<ExtArgs> | null;
    omit?: Prisma.ConvocatoriaOmit<ExtArgs> | null;
    where: Prisma.ConvocatoriaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConvocatoriaCreateInput, Prisma.ConvocatoriaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ConvocatoriaUpdateInput, Prisma.ConvocatoriaUncheckedUpdateInput>;
};
export type ConvocatoriaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvocatoriaSelect<ExtArgs> | null;
    omit?: Prisma.ConvocatoriaOmit<ExtArgs> | null;
    where: Prisma.ConvocatoriaWhereUniqueInput;
};
export type ConvocatoriaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConvocatoriaWhereInput;
    limit?: number;
};
export type ConvocatoriaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvocatoriaSelect<ExtArgs> | null;
    omit?: Prisma.ConvocatoriaOmit<ExtArgs> | null;
};
