import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ConvalidaModel = runtime.Types.Result.DefaultSelection<Prisma.$ConvalidaPayload>;
export type AggregateConvalida = {
    _count: ConvalidaCountAggregateOutputType | null;
    _avg: ConvalidaAvgAggregateOutputType | null;
    _sum: ConvalidaSumAggregateOutputType | null;
    _min: ConvalidaMinAggregateOutputType | null;
    _max: ConvalidaMaxAggregateOutputType | null;
};
export type ConvalidaAvgAggregateOutputType = {
    idMateriaAct: number | null;
    idMateriaAntigua: number | null;
};
export type ConvalidaSumAggregateOutputType = {
    idMateriaAct: number | null;
    idMateriaAntigua: number | null;
};
export type ConvalidaMinAggregateOutputType = {
    idMateriaAct: number | null;
    idMateriaAntigua: number | null;
    nombreMateriaAntigua: string | null;
    siglaMateriaAntigua: string | null;
};
export type ConvalidaMaxAggregateOutputType = {
    idMateriaAct: number | null;
    idMateriaAntigua: number | null;
    nombreMateriaAntigua: string | null;
    siglaMateriaAntigua: string | null;
};
export type ConvalidaCountAggregateOutputType = {
    idMateriaAct: number;
    idMateriaAntigua: number;
    nombreMateriaAntigua: number;
    siglaMateriaAntigua: number;
    _all: number;
};
export type ConvalidaAvgAggregateInputType = {
    idMateriaAct?: true;
    idMateriaAntigua?: true;
};
export type ConvalidaSumAggregateInputType = {
    idMateriaAct?: true;
    idMateriaAntigua?: true;
};
export type ConvalidaMinAggregateInputType = {
    idMateriaAct?: true;
    idMateriaAntigua?: true;
    nombreMateriaAntigua?: true;
    siglaMateriaAntigua?: true;
};
export type ConvalidaMaxAggregateInputType = {
    idMateriaAct?: true;
    idMateriaAntigua?: true;
    nombreMateriaAntigua?: true;
    siglaMateriaAntigua?: true;
};
export type ConvalidaCountAggregateInputType = {
    idMateriaAct?: true;
    idMateriaAntigua?: true;
    nombreMateriaAntigua?: true;
    siglaMateriaAntigua?: true;
    _all?: true;
};
export type ConvalidaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConvalidaWhereInput;
    orderBy?: Prisma.ConvalidaOrderByWithRelationInput | Prisma.ConvalidaOrderByWithRelationInput[];
    cursor?: Prisma.ConvalidaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ConvalidaCountAggregateInputType;
    _avg?: ConvalidaAvgAggregateInputType;
    _sum?: ConvalidaSumAggregateInputType;
    _min?: ConvalidaMinAggregateInputType;
    _max?: ConvalidaMaxAggregateInputType;
};
export type GetConvalidaAggregateType<T extends ConvalidaAggregateArgs> = {
    [P in keyof T & keyof AggregateConvalida]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConvalida[P]> : Prisma.GetScalarType<T[P], AggregateConvalida[P]>;
};
export type ConvalidaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConvalidaWhereInput;
    orderBy?: Prisma.ConvalidaOrderByWithAggregationInput | Prisma.ConvalidaOrderByWithAggregationInput[];
    by: Prisma.ConvalidaScalarFieldEnum[] | Prisma.ConvalidaScalarFieldEnum;
    having?: Prisma.ConvalidaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConvalidaCountAggregateInputType | true;
    _avg?: ConvalidaAvgAggregateInputType;
    _sum?: ConvalidaSumAggregateInputType;
    _min?: ConvalidaMinAggregateInputType;
    _max?: ConvalidaMaxAggregateInputType;
};
export type ConvalidaGroupByOutputType = {
    idMateriaAct: number;
    idMateriaAntigua: number | null;
    nombreMateriaAntigua: string;
    siglaMateriaAntigua: string;
    _count: ConvalidaCountAggregateOutputType | null;
    _avg: ConvalidaAvgAggregateOutputType | null;
    _sum: ConvalidaSumAggregateOutputType | null;
    _min: ConvalidaMinAggregateOutputType | null;
    _max: ConvalidaMaxAggregateOutputType | null;
};
export type GetConvalidaGroupByPayload<T extends ConvalidaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ConvalidaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ConvalidaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ConvalidaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ConvalidaGroupByOutputType[P]>;
}>>;
export type ConvalidaWhereInput = {
    AND?: Prisma.ConvalidaWhereInput | Prisma.ConvalidaWhereInput[];
    OR?: Prisma.ConvalidaWhereInput[];
    NOT?: Prisma.ConvalidaWhereInput | Prisma.ConvalidaWhereInput[];
    idMateriaAct?: Prisma.IntFilter<"Convalida"> | number;
    idMateriaAntigua?: Prisma.IntNullableFilter<"Convalida"> | number | null;
    nombreMateriaAntigua?: Prisma.StringFilter<"Convalida"> | string;
    siglaMateriaAntigua?: Prisma.StringFilter<"Convalida"> | string;
};
export type ConvalidaOrderByWithRelationInput = {
    idMateriaAct?: Prisma.SortOrder;
    idMateriaAntigua?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombreMateriaAntigua?: Prisma.SortOrder;
    siglaMateriaAntigua?: Prisma.SortOrder;
};
export type ConvalidaWhereUniqueInput = Prisma.AtLeast<{
    idMateriaAct?: number;
    AND?: Prisma.ConvalidaWhereInput | Prisma.ConvalidaWhereInput[];
    OR?: Prisma.ConvalidaWhereInput[];
    NOT?: Prisma.ConvalidaWhereInput | Prisma.ConvalidaWhereInput[];
    idMateriaAntigua?: Prisma.IntNullableFilter<"Convalida"> | number | null;
    nombreMateriaAntigua?: Prisma.StringFilter<"Convalida"> | string;
    siglaMateriaAntigua?: Prisma.StringFilter<"Convalida"> | string;
}, "idMateriaAct">;
export type ConvalidaOrderByWithAggregationInput = {
    idMateriaAct?: Prisma.SortOrder;
    idMateriaAntigua?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombreMateriaAntigua?: Prisma.SortOrder;
    siglaMateriaAntigua?: Prisma.SortOrder;
    _count?: Prisma.ConvalidaCountOrderByAggregateInput;
    _avg?: Prisma.ConvalidaAvgOrderByAggregateInput;
    _max?: Prisma.ConvalidaMaxOrderByAggregateInput;
    _min?: Prisma.ConvalidaMinOrderByAggregateInput;
    _sum?: Prisma.ConvalidaSumOrderByAggregateInput;
};
export type ConvalidaScalarWhereWithAggregatesInput = {
    AND?: Prisma.ConvalidaScalarWhereWithAggregatesInput | Prisma.ConvalidaScalarWhereWithAggregatesInput[];
    OR?: Prisma.ConvalidaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ConvalidaScalarWhereWithAggregatesInput | Prisma.ConvalidaScalarWhereWithAggregatesInput[];
    idMateriaAct?: Prisma.IntWithAggregatesFilter<"Convalida"> | number;
    idMateriaAntigua?: Prisma.IntNullableWithAggregatesFilter<"Convalida"> | number | null;
    nombreMateriaAntigua?: Prisma.StringWithAggregatesFilter<"Convalida"> | string;
    siglaMateriaAntigua?: Prisma.StringWithAggregatesFilter<"Convalida"> | string;
};
export type ConvalidaCreateInput = {
    idMateriaAntigua?: number | null;
    nombreMateriaAntigua: string;
    siglaMateriaAntigua: string;
};
export type ConvalidaUncheckedCreateInput = {
    idMateriaAct?: number;
    idMateriaAntigua?: number | null;
    nombreMateriaAntigua: string;
    siglaMateriaAntigua: string;
};
export type ConvalidaUpdateInput = {
    idMateriaAntigua?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombreMateriaAntigua?: Prisma.StringFieldUpdateOperationsInput | string;
    siglaMateriaAntigua?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ConvalidaUncheckedUpdateInput = {
    idMateriaAct?: Prisma.IntFieldUpdateOperationsInput | number;
    idMateriaAntigua?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombreMateriaAntigua?: Prisma.StringFieldUpdateOperationsInput | string;
    siglaMateriaAntigua?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ConvalidaCreateManyInput = {
    idMateriaAct?: number;
    idMateriaAntigua?: number | null;
    nombreMateriaAntigua: string;
    siglaMateriaAntigua: string;
};
export type ConvalidaUpdateManyMutationInput = {
    idMateriaAntigua?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombreMateriaAntigua?: Prisma.StringFieldUpdateOperationsInput | string;
    siglaMateriaAntigua?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ConvalidaUncheckedUpdateManyInput = {
    idMateriaAct?: Prisma.IntFieldUpdateOperationsInput | number;
    idMateriaAntigua?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombreMateriaAntigua?: Prisma.StringFieldUpdateOperationsInput | string;
    siglaMateriaAntigua?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ConvalidaCountOrderByAggregateInput = {
    idMateriaAct?: Prisma.SortOrder;
    idMateriaAntigua?: Prisma.SortOrder;
    nombreMateriaAntigua?: Prisma.SortOrder;
    siglaMateriaAntigua?: Prisma.SortOrder;
};
export type ConvalidaAvgOrderByAggregateInput = {
    idMateriaAct?: Prisma.SortOrder;
    idMateriaAntigua?: Prisma.SortOrder;
};
export type ConvalidaMaxOrderByAggregateInput = {
    idMateriaAct?: Prisma.SortOrder;
    idMateriaAntigua?: Prisma.SortOrder;
    nombreMateriaAntigua?: Prisma.SortOrder;
    siglaMateriaAntigua?: Prisma.SortOrder;
};
export type ConvalidaMinOrderByAggregateInput = {
    idMateriaAct?: Prisma.SortOrder;
    idMateriaAntigua?: Prisma.SortOrder;
    nombreMateriaAntigua?: Prisma.SortOrder;
    siglaMateriaAntigua?: Prisma.SortOrder;
};
export type ConvalidaSumOrderByAggregateInput = {
    idMateriaAct?: Prisma.SortOrder;
    idMateriaAntigua?: Prisma.SortOrder;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ConvalidaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idMateriaAct?: boolean;
    idMateriaAntigua?: boolean;
    nombreMateriaAntigua?: boolean;
    siglaMateriaAntigua?: boolean;
}, ExtArgs["result"]["convalida"]>;
export type ConvalidaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idMateriaAct?: boolean;
    idMateriaAntigua?: boolean;
    nombreMateriaAntigua?: boolean;
    siglaMateriaAntigua?: boolean;
}, ExtArgs["result"]["convalida"]>;
export type ConvalidaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idMateriaAct?: boolean;
    idMateriaAntigua?: boolean;
    nombreMateriaAntigua?: boolean;
    siglaMateriaAntigua?: boolean;
}, ExtArgs["result"]["convalida"]>;
export type ConvalidaSelectScalar = {
    idMateriaAct?: boolean;
    idMateriaAntigua?: boolean;
    nombreMateriaAntigua?: boolean;
    siglaMateriaAntigua?: boolean;
};
export type ConvalidaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"idMateriaAct" | "idMateriaAntigua" | "nombreMateriaAntigua" | "siglaMateriaAntigua", ExtArgs["result"]["convalida"]>;
export type $ConvalidaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Convalida";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        idMateriaAct: number;
        idMateriaAntigua: number | null;
        nombreMateriaAntigua: string;
        siglaMateriaAntigua: string;
    }, ExtArgs["result"]["convalida"]>;
    composites: {};
};
export type ConvalidaGetPayload<S extends boolean | null | undefined | ConvalidaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ConvalidaPayload, S>;
export type ConvalidaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ConvalidaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ConvalidaCountAggregateInputType | true;
};
export interface ConvalidaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Convalida'];
        meta: {
            name: 'Convalida';
        };
    };
    findUnique<T extends ConvalidaFindUniqueArgs>(args: Prisma.SelectSubset<T, ConvalidaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ConvalidaClient<runtime.Types.Result.GetResult<Prisma.$ConvalidaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ConvalidaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ConvalidaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConvalidaClient<runtime.Types.Result.GetResult<Prisma.$ConvalidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ConvalidaFindFirstArgs>(args?: Prisma.SelectSubset<T, ConvalidaFindFirstArgs<ExtArgs>>): Prisma.Prisma__ConvalidaClient<runtime.Types.Result.GetResult<Prisma.$ConvalidaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ConvalidaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ConvalidaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConvalidaClient<runtime.Types.Result.GetResult<Prisma.$ConvalidaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ConvalidaFindManyArgs>(args?: Prisma.SelectSubset<T, ConvalidaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConvalidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ConvalidaCreateArgs>(args: Prisma.SelectSubset<T, ConvalidaCreateArgs<ExtArgs>>): Prisma.Prisma__ConvalidaClient<runtime.Types.Result.GetResult<Prisma.$ConvalidaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ConvalidaCreateManyArgs>(args?: Prisma.SelectSubset<T, ConvalidaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ConvalidaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ConvalidaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConvalidaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ConvalidaDeleteArgs>(args: Prisma.SelectSubset<T, ConvalidaDeleteArgs<ExtArgs>>): Prisma.Prisma__ConvalidaClient<runtime.Types.Result.GetResult<Prisma.$ConvalidaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ConvalidaUpdateArgs>(args: Prisma.SelectSubset<T, ConvalidaUpdateArgs<ExtArgs>>): Prisma.Prisma__ConvalidaClient<runtime.Types.Result.GetResult<Prisma.$ConvalidaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ConvalidaDeleteManyArgs>(args?: Prisma.SelectSubset<T, ConvalidaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ConvalidaUpdateManyArgs>(args: Prisma.SelectSubset<T, ConvalidaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ConvalidaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ConvalidaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConvalidaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ConvalidaUpsertArgs>(args: Prisma.SelectSubset<T, ConvalidaUpsertArgs<ExtArgs>>): Prisma.Prisma__ConvalidaClient<runtime.Types.Result.GetResult<Prisma.$ConvalidaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ConvalidaCountArgs>(args?: Prisma.Subset<T, ConvalidaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ConvalidaCountAggregateOutputType> : number>;
    aggregate<T extends ConvalidaAggregateArgs>(args: Prisma.Subset<T, ConvalidaAggregateArgs>): Prisma.PrismaPromise<GetConvalidaAggregateType<T>>;
    groupBy<T extends ConvalidaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ConvalidaGroupByArgs['orderBy'];
    } : {
        orderBy?: ConvalidaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ConvalidaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConvalidaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ConvalidaFieldRefs;
}
export interface Prisma__ConvalidaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ConvalidaFieldRefs {
    readonly idMateriaAct: Prisma.FieldRef<"Convalida", 'Int'>;
    readonly idMateriaAntigua: Prisma.FieldRef<"Convalida", 'Int'>;
    readonly nombreMateriaAntigua: Prisma.FieldRef<"Convalida", 'String'>;
    readonly siglaMateriaAntigua: Prisma.FieldRef<"Convalida", 'String'>;
}
export type ConvalidaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvalidaSelect<ExtArgs> | null;
    omit?: Prisma.ConvalidaOmit<ExtArgs> | null;
    where: Prisma.ConvalidaWhereUniqueInput;
};
export type ConvalidaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvalidaSelect<ExtArgs> | null;
    omit?: Prisma.ConvalidaOmit<ExtArgs> | null;
    where: Prisma.ConvalidaWhereUniqueInput;
};
export type ConvalidaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvalidaSelect<ExtArgs> | null;
    omit?: Prisma.ConvalidaOmit<ExtArgs> | null;
    where?: Prisma.ConvalidaWhereInput;
    orderBy?: Prisma.ConvalidaOrderByWithRelationInput | Prisma.ConvalidaOrderByWithRelationInput[];
    cursor?: Prisma.ConvalidaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConvalidaScalarFieldEnum | Prisma.ConvalidaScalarFieldEnum[];
};
export type ConvalidaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvalidaSelect<ExtArgs> | null;
    omit?: Prisma.ConvalidaOmit<ExtArgs> | null;
    where?: Prisma.ConvalidaWhereInput;
    orderBy?: Prisma.ConvalidaOrderByWithRelationInput | Prisma.ConvalidaOrderByWithRelationInput[];
    cursor?: Prisma.ConvalidaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConvalidaScalarFieldEnum | Prisma.ConvalidaScalarFieldEnum[];
};
export type ConvalidaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvalidaSelect<ExtArgs> | null;
    omit?: Prisma.ConvalidaOmit<ExtArgs> | null;
    where?: Prisma.ConvalidaWhereInput;
    orderBy?: Prisma.ConvalidaOrderByWithRelationInput | Prisma.ConvalidaOrderByWithRelationInput[];
    cursor?: Prisma.ConvalidaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConvalidaScalarFieldEnum | Prisma.ConvalidaScalarFieldEnum[];
};
export type ConvalidaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvalidaSelect<ExtArgs> | null;
    omit?: Prisma.ConvalidaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConvalidaCreateInput, Prisma.ConvalidaUncheckedCreateInput>;
};
export type ConvalidaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ConvalidaCreateManyInput | Prisma.ConvalidaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ConvalidaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvalidaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConvalidaOmit<ExtArgs> | null;
    data: Prisma.ConvalidaCreateManyInput | Prisma.ConvalidaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ConvalidaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvalidaSelect<ExtArgs> | null;
    omit?: Prisma.ConvalidaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConvalidaUpdateInput, Prisma.ConvalidaUncheckedUpdateInput>;
    where: Prisma.ConvalidaWhereUniqueInput;
};
export type ConvalidaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ConvalidaUpdateManyMutationInput, Prisma.ConvalidaUncheckedUpdateManyInput>;
    where?: Prisma.ConvalidaWhereInput;
    limit?: number;
};
export type ConvalidaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvalidaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConvalidaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConvalidaUpdateManyMutationInput, Prisma.ConvalidaUncheckedUpdateManyInput>;
    where?: Prisma.ConvalidaWhereInput;
    limit?: number;
};
export type ConvalidaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvalidaSelect<ExtArgs> | null;
    omit?: Prisma.ConvalidaOmit<ExtArgs> | null;
    where: Prisma.ConvalidaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConvalidaCreateInput, Prisma.ConvalidaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ConvalidaUpdateInput, Prisma.ConvalidaUncheckedUpdateInput>;
};
export type ConvalidaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvalidaSelect<ExtArgs> | null;
    omit?: Prisma.ConvalidaOmit<ExtArgs> | null;
    where: Prisma.ConvalidaWhereUniqueInput;
};
export type ConvalidaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConvalidaWhereInput;
    limit?: number;
};
export type ConvalidaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvalidaSelect<ExtArgs> | null;
    omit?: Prisma.ConvalidaOmit<ExtArgs> | null;
};
