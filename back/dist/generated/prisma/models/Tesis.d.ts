import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type TesisModel = runtime.Types.Result.DefaultSelection<Prisma.$TesisPayload>;
export type AggregateTesis = {
    _count: TesisCountAggregateOutputType | null;
    _avg: TesisAvgAggregateOutputType | null;
    _sum: TesisSumAggregateOutputType | null;
    _min: TesisMinAggregateOutputType | null;
    _max: TesisMaxAggregateOutputType | null;
};
export type TesisAvgAggregateOutputType = {
    id: number | null;
};
export type TesisSumAggregateOutputType = {
    id: number | null;
};
export type TesisMinAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    tipo: string | null;
    area: string | null;
    tutor: string | null;
    investigador: string | null;
    resumen: string | null;
    link: string | null;
};
export type TesisMaxAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    tipo: string | null;
    area: string | null;
    tutor: string | null;
    investigador: string | null;
    resumen: string | null;
    link: string | null;
};
export type TesisCountAggregateOutputType = {
    id: number;
    titulo: number;
    tipo: number;
    area: number;
    tutor: number;
    investigador: number;
    resumen: number;
    link: number;
    _all: number;
};
export type TesisAvgAggregateInputType = {
    id?: true;
};
export type TesisSumAggregateInputType = {
    id?: true;
};
export type TesisMinAggregateInputType = {
    id?: true;
    titulo?: true;
    tipo?: true;
    area?: true;
    tutor?: true;
    investigador?: true;
    resumen?: true;
    link?: true;
};
export type TesisMaxAggregateInputType = {
    id?: true;
    titulo?: true;
    tipo?: true;
    area?: true;
    tutor?: true;
    investigador?: true;
    resumen?: true;
    link?: true;
};
export type TesisCountAggregateInputType = {
    id?: true;
    titulo?: true;
    tipo?: true;
    area?: true;
    tutor?: true;
    investigador?: true;
    resumen?: true;
    link?: true;
    _all?: true;
};
export type TesisAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TesisWhereInput;
    orderBy?: Prisma.TesisOrderByWithRelationInput | Prisma.TesisOrderByWithRelationInput[];
    cursor?: Prisma.TesisWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TesisCountAggregateInputType;
    _avg?: TesisAvgAggregateInputType;
    _sum?: TesisSumAggregateInputType;
    _min?: TesisMinAggregateInputType;
    _max?: TesisMaxAggregateInputType;
};
export type GetTesisAggregateType<T extends TesisAggregateArgs> = {
    [P in keyof T & keyof AggregateTesis]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTesis[P]> : Prisma.GetScalarType<T[P], AggregateTesis[P]>;
};
export type TesisGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TesisWhereInput;
    orderBy?: Prisma.TesisOrderByWithAggregationInput | Prisma.TesisOrderByWithAggregationInput[];
    by: Prisma.TesisScalarFieldEnum[] | Prisma.TesisScalarFieldEnum;
    having?: Prisma.TesisScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TesisCountAggregateInputType | true;
    _avg?: TesisAvgAggregateInputType;
    _sum?: TesisSumAggregateInputType;
    _min?: TesisMinAggregateInputType;
    _max?: TesisMaxAggregateInputType;
};
export type TesisGroupByOutputType = {
    id: number;
    titulo: string | null;
    tipo: string | null;
    area: string | null;
    tutor: string | null;
    investigador: string | null;
    resumen: string | null;
    link: string | null;
    _count: TesisCountAggregateOutputType | null;
    _avg: TesisAvgAggregateOutputType | null;
    _sum: TesisSumAggregateOutputType | null;
    _min: TesisMinAggregateOutputType | null;
    _max: TesisMaxAggregateOutputType | null;
};
export type GetTesisGroupByPayload<T extends TesisGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TesisGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TesisGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TesisGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TesisGroupByOutputType[P]>;
}>>;
export type TesisWhereInput = {
    AND?: Prisma.TesisWhereInput | Prisma.TesisWhereInput[];
    OR?: Prisma.TesisWhereInput[];
    NOT?: Prisma.TesisWhereInput | Prisma.TesisWhereInput[];
    id?: Prisma.IntFilter<"Tesis"> | number;
    titulo?: Prisma.StringNullableFilter<"Tesis"> | string | null;
    tipo?: Prisma.StringNullableFilter<"Tesis"> | string | null;
    area?: Prisma.StringNullableFilter<"Tesis"> | string | null;
    tutor?: Prisma.StringNullableFilter<"Tesis"> | string | null;
    investigador?: Prisma.StringNullableFilter<"Tesis"> | string | null;
    resumen?: Prisma.StringNullableFilter<"Tesis"> | string | null;
    link?: Prisma.StringNullableFilter<"Tesis"> | string | null;
};
export type TesisOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    area?: Prisma.SortOrderInput | Prisma.SortOrder;
    tutor?: Prisma.SortOrderInput | Prisma.SortOrder;
    investigador?: Prisma.SortOrderInput | Prisma.SortOrder;
    resumen?: Prisma.SortOrderInput | Prisma.SortOrder;
    link?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type TesisWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.TesisWhereInput | Prisma.TesisWhereInput[];
    OR?: Prisma.TesisWhereInput[];
    NOT?: Prisma.TesisWhereInput | Prisma.TesisWhereInput[];
    titulo?: Prisma.StringNullableFilter<"Tesis"> | string | null;
    tipo?: Prisma.StringNullableFilter<"Tesis"> | string | null;
    area?: Prisma.StringNullableFilter<"Tesis"> | string | null;
    tutor?: Prisma.StringNullableFilter<"Tesis"> | string | null;
    investigador?: Prisma.StringNullableFilter<"Tesis"> | string | null;
    resumen?: Prisma.StringNullableFilter<"Tesis"> | string | null;
    link?: Prisma.StringNullableFilter<"Tesis"> | string | null;
}, "id">;
export type TesisOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    area?: Prisma.SortOrderInput | Prisma.SortOrder;
    tutor?: Prisma.SortOrderInput | Prisma.SortOrder;
    investigador?: Prisma.SortOrderInput | Prisma.SortOrder;
    resumen?: Prisma.SortOrderInput | Prisma.SortOrder;
    link?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.TesisCountOrderByAggregateInput;
    _avg?: Prisma.TesisAvgOrderByAggregateInput;
    _max?: Prisma.TesisMaxOrderByAggregateInput;
    _min?: Prisma.TesisMinOrderByAggregateInput;
    _sum?: Prisma.TesisSumOrderByAggregateInput;
};
export type TesisScalarWhereWithAggregatesInput = {
    AND?: Prisma.TesisScalarWhereWithAggregatesInput | Prisma.TesisScalarWhereWithAggregatesInput[];
    OR?: Prisma.TesisScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TesisScalarWhereWithAggregatesInput | Prisma.TesisScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Tesis"> | number;
    titulo?: Prisma.StringNullableWithAggregatesFilter<"Tesis"> | string | null;
    tipo?: Prisma.StringNullableWithAggregatesFilter<"Tesis"> | string | null;
    area?: Prisma.StringNullableWithAggregatesFilter<"Tesis"> | string | null;
    tutor?: Prisma.StringNullableWithAggregatesFilter<"Tesis"> | string | null;
    investigador?: Prisma.StringNullableWithAggregatesFilter<"Tesis"> | string | null;
    resumen?: Prisma.StringNullableWithAggregatesFilter<"Tesis"> | string | null;
    link?: Prisma.StringNullableWithAggregatesFilter<"Tesis"> | string | null;
};
export type TesisCreateInput = {
    titulo?: string | null;
    tipo?: string | null;
    area?: string | null;
    tutor?: string | null;
    investigador?: string | null;
    resumen?: string | null;
    link?: string | null;
};
export type TesisUncheckedCreateInput = {
    id?: number;
    titulo?: string | null;
    tipo?: string | null;
    area?: string | null;
    tutor?: string | null;
    investigador?: string | null;
    resumen?: string | null;
    link?: string | null;
};
export type TesisUpdateInput = {
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    area?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tutor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investigador?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TesisUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    area?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tutor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investigador?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TesisCreateManyInput = {
    id?: number;
    titulo?: string | null;
    tipo?: string | null;
    area?: string | null;
    tutor?: string | null;
    investigador?: string | null;
    resumen?: string | null;
    link?: string | null;
};
export type TesisUpdateManyMutationInput = {
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    area?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tutor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investigador?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TesisUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    area?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tutor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investigador?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TesisCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    tutor?: Prisma.SortOrder;
    investigador?: Prisma.SortOrder;
    resumen?: Prisma.SortOrder;
    link?: Prisma.SortOrder;
};
export type TesisAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type TesisMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    tutor?: Prisma.SortOrder;
    investigador?: Prisma.SortOrder;
    resumen?: Prisma.SortOrder;
    link?: Prisma.SortOrder;
};
export type TesisMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    tutor?: Prisma.SortOrder;
    investigador?: Prisma.SortOrder;
    resumen?: Prisma.SortOrder;
    link?: Prisma.SortOrder;
};
export type TesisSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type TesisSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    tipo?: boolean;
    area?: boolean;
    tutor?: boolean;
    investigador?: boolean;
    resumen?: boolean;
    link?: boolean;
}, ExtArgs["result"]["tesis"]>;
export type TesisSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    tipo?: boolean;
    area?: boolean;
    tutor?: boolean;
    investigador?: boolean;
    resumen?: boolean;
    link?: boolean;
}, ExtArgs["result"]["tesis"]>;
export type TesisSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    tipo?: boolean;
    area?: boolean;
    tutor?: boolean;
    investigador?: boolean;
    resumen?: boolean;
    link?: boolean;
}, ExtArgs["result"]["tesis"]>;
export type TesisSelectScalar = {
    id?: boolean;
    titulo?: boolean;
    tipo?: boolean;
    area?: boolean;
    tutor?: boolean;
    investigador?: boolean;
    resumen?: boolean;
    link?: boolean;
};
export type TesisOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "titulo" | "tipo" | "area" | "tutor" | "investigador" | "resumen" | "link", ExtArgs["result"]["tesis"]>;
export type $TesisPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Tesis";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        titulo: string | null;
        tipo: string | null;
        area: string | null;
        tutor: string | null;
        investigador: string | null;
        resumen: string | null;
        link: string | null;
    }, ExtArgs["result"]["tesis"]>;
    composites: {};
};
export type TesisGetPayload<S extends boolean | null | undefined | TesisDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TesisPayload, S>;
export type TesisCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TesisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TesisCountAggregateInputType | true;
};
export interface TesisDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Tesis'];
        meta: {
            name: 'Tesis';
        };
    };
    findUnique<T extends TesisFindUniqueArgs>(args: Prisma.SelectSubset<T, TesisFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TesisClient<runtime.Types.Result.GetResult<Prisma.$TesisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TesisFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TesisFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TesisClient<runtime.Types.Result.GetResult<Prisma.$TesisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TesisFindFirstArgs>(args?: Prisma.SelectSubset<T, TesisFindFirstArgs<ExtArgs>>): Prisma.Prisma__TesisClient<runtime.Types.Result.GetResult<Prisma.$TesisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TesisFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TesisFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TesisClient<runtime.Types.Result.GetResult<Prisma.$TesisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TesisFindManyArgs>(args?: Prisma.SelectSubset<T, TesisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TesisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TesisCreateArgs>(args: Prisma.SelectSubset<T, TesisCreateArgs<ExtArgs>>): Prisma.Prisma__TesisClient<runtime.Types.Result.GetResult<Prisma.$TesisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TesisCreateManyArgs>(args?: Prisma.SelectSubset<T, TesisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TesisCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TesisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TesisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TesisDeleteArgs>(args: Prisma.SelectSubset<T, TesisDeleteArgs<ExtArgs>>): Prisma.Prisma__TesisClient<runtime.Types.Result.GetResult<Prisma.$TesisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TesisUpdateArgs>(args: Prisma.SelectSubset<T, TesisUpdateArgs<ExtArgs>>): Prisma.Prisma__TesisClient<runtime.Types.Result.GetResult<Prisma.$TesisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TesisDeleteManyArgs>(args?: Prisma.SelectSubset<T, TesisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TesisUpdateManyArgs>(args: Prisma.SelectSubset<T, TesisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TesisUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TesisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TesisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TesisUpsertArgs>(args: Prisma.SelectSubset<T, TesisUpsertArgs<ExtArgs>>): Prisma.Prisma__TesisClient<runtime.Types.Result.GetResult<Prisma.$TesisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TesisCountArgs>(args?: Prisma.Subset<T, TesisCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TesisCountAggregateOutputType> : number>;
    aggregate<T extends TesisAggregateArgs>(args: Prisma.Subset<T, TesisAggregateArgs>): Prisma.PrismaPromise<GetTesisAggregateType<T>>;
    groupBy<T extends TesisGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TesisGroupByArgs['orderBy'];
    } : {
        orderBy?: TesisGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TesisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTesisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TesisFieldRefs;
}
export interface Prisma__TesisClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TesisFieldRefs {
    readonly id: Prisma.FieldRef<"Tesis", 'Int'>;
    readonly titulo: Prisma.FieldRef<"Tesis", 'String'>;
    readonly tipo: Prisma.FieldRef<"Tesis", 'String'>;
    readonly area: Prisma.FieldRef<"Tesis", 'String'>;
    readonly tutor: Prisma.FieldRef<"Tesis", 'String'>;
    readonly investigador: Prisma.FieldRef<"Tesis", 'String'>;
    readonly resumen: Prisma.FieldRef<"Tesis", 'String'>;
    readonly link: Prisma.FieldRef<"Tesis", 'String'>;
}
export type TesisFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TesisSelect<ExtArgs> | null;
    omit?: Prisma.TesisOmit<ExtArgs> | null;
    where: Prisma.TesisWhereUniqueInput;
};
export type TesisFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TesisSelect<ExtArgs> | null;
    omit?: Prisma.TesisOmit<ExtArgs> | null;
    where: Prisma.TesisWhereUniqueInput;
};
export type TesisFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TesisSelect<ExtArgs> | null;
    omit?: Prisma.TesisOmit<ExtArgs> | null;
    where?: Prisma.TesisWhereInput;
    orderBy?: Prisma.TesisOrderByWithRelationInput | Prisma.TesisOrderByWithRelationInput[];
    cursor?: Prisma.TesisWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TesisScalarFieldEnum | Prisma.TesisScalarFieldEnum[];
};
export type TesisFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TesisSelect<ExtArgs> | null;
    omit?: Prisma.TesisOmit<ExtArgs> | null;
    where?: Prisma.TesisWhereInput;
    orderBy?: Prisma.TesisOrderByWithRelationInput | Prisma.TesisOrderByWithRelationInput[];
    cursor?: Prisma.TesisWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TesisScalarFieldEnum | Prisma.TesisScalarFieldEnum[];
};
export type TesisFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TesisSelect<ExtArgs> | null;
    omit?: Prisma.TesisOmit<ExtArgs> | null;
    where?: Prisma.TesisWhereInput;
    orderBy?: Prisma.TesisOrderByWithRelationInput | Prisma.TesisOrderByWithRelationInput[];
    cursor?: Prisma.TesisWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TesisScalarFieldEnum | Prisma.TesisScalarFieldEnum[];
};
export type TesisCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TesisSelect<ExtArgs> | null;
    omit?: Prisma.TesisOmit<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.TesisCreateInput, Prisma.TesisUncheckedCreateInput>;
};
export type TesisCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TesisCreateManyInput | Prisma.TesisCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TesisCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TesisSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TesisOmit<ExtArgs> | null;
    data: Prisma.TesisCreateManyInput | Prisma.TesisCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TesisUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TesisSelect<ExtArgs> | null;
    omit?: Prisma.TesisOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TesisUpdateInput, Prisma.TesisUncheckedUpdateInput>;
    where: Prisma.TesisWhereUniqueInput;
};
export type TesisUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TesisUpdateManyMutationInput, Prisma.TesisUncheckedUpdateManyInput>;
    where?: Prisma.TesisWhereInput;
    limit?: number;
};
export type TesisUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TesisSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TesisOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TesisUpdateManyMutationInput, Prisma.TesisUncheckedUpdateManyInput>;
    where?: Prisma.TesisWhereInput;
    limit?: number;
};
export type TesisUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TesisSelect<ExtArgs> | null;
    omit?: Prisma.TesisOmit<ExtArgs> | null;
    where: Prisma.TesisWhereUniqueInput;
    create: Prisma.XOR<Prisma.TesisCreateInput, Prisma.TesisUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TesisUpdateInput, Prisma.TesisUncheckedUpdateInput>;
};
export type TesisDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TesisSelect<ExtArgs> | null;
    omit?: Prisma.TesisOmit<ExtArgs> | null;
    where: Prisma.TesisWhereUniqueInput;
};
export type TesisDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TesisWhereInput;
    limit?: number;
};
export type TesisDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TesisSelect<ExtArgs> | null;
    omit?: Prisma.TesisOmit<ExtArgs> | null;
};
