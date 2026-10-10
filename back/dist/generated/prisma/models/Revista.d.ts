import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type RevistaModel = runtime.Types.Result.DefaultSelection<Prisma.$RevistaPayload>;
export type AggregateRevista = {
    _count: RevistaCountAggregateOutputType | null;
    _avg: RevistaAvgAggregateOutputType | null;
    _sum: RevistaSumAggregateOutputType | null;
    _min: RevistaMinAggregateOutputType | null;
    _max: RevistaMaxAggregateOutputType | null;
};
export type RevistaAvgAggregateOutputType = {
    id: number | null;
};
export type RevistaSumAggregateOutputType = {
    id: number | null;
};
export type RevistaMinAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    tipo: string | null;
    publicacion: string | null;
    autor: string | null;
    descripcion: string | null;
    link: string | null;
};
export type RevistaMaxAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    tipo: string | null;
    publicacion: string | null;
    autor: string | null;
    descripcion: string | null;
    link: string | null;
};
export type RevistaCountAggregateOutputType = {
    id: number;
    titulo: number;
    tipo: number;
    publicacion: number;
    autor: number;
    descripcion: number;
    link: number;
    _all: number;
};
export type RevistaAvgAggregateInputType = {
    id?: true;
};
export type RevistaSumAggregateInputType = {
    id?: true;
};
export type RevistaMinAggregateInputType = {
    id?: true;
    titulo?: true;
    tipo?: true;
    publicacion?: true;
    autor?: true;
    descripcion?: true;
    link?: true;
};
export type RevistaMaxAggregateInputType = {
    id?: true;
    titulo?: true;
    tipo?: true;
    publicacion?: true;
    autor?: true;
    descripcion?: true;
    link?: true;
};
export type RevistaCountAggregateInputType = {
    id?: true;
    titulo?: true;
    tipo?: true;
    publicacion?: true;
    autor?: true;
    descripcion?: true;
    link?: true;
    _all?: true;
};
export type RevistaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RevistaWhereInput;
    orderBy?: Prisma.RevistaOrderByWithRelationInput | Prisma.RevistaOrderByWithRelationInput[];
    cursor?: Prisma.RevistaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RevistaCountAggregateInputType;
    _avg?: RevistaAvgAggregateInputType;
    _sum?: RevistaSumAggregateInputType;
    _min?: RevistaMinAggregateInputType;
    _max?: RevistaMaxAggregateInputType;
};
export type GetRevistaAggregateType<T extends RevistaAggregateArgs> = {
    [P in keyof T & keyof AggregateRevista]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRevista[P]> : Prisma.GetScalarType<T[P], AggregateRevista[P]>;
};
export type RevistaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RevistaWhereInput;
    orderBy?: Prisma.RevistaOrderByWithAggregationInput | Prisma.RevistaOrderByWithAggregationInput[];
    by: Prisma.RevistaScalarFieldEnum[] | Prisma.RevistaScalarFieldEnum;
    having?: Prisma.RevistaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RevistaCountAggregateInputType | true;
    _avg?: RevistaAvgAggregateInputType;
    _sum?: RevistaSumAggregateInputType;
    _min?: RevistaMinAggregateInputType;
    _max?: RevistaMaxAggregateInputType;
};
export type RevistaGroupByOutputType = {
    id: number;
    titulo: string | null;
    tipo: string | null;
    publicacion: string | null;
    autor: string | null;
    descripcion: string | null;
    link: string | null;
    _count: RevistaCountAggregateOutputType | null;
    _avg: RevistaAvgAggregateOutputType | null;
    _sum: RevistaSumAggregateOutputType | null;
    _min: RevistaMinAggregateOutputType | null;
    _max: RevistaMaxAggregateOutputType | null;
};
export type GetRevistaGroupByPayload<T extends RevistaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RevistaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RevistaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RevistaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RevistaGroupByOutputType[P]>;
}>>;
export type RevistaWhereInput = {
    AND?: Prisma.RevistaWhereInput | Prisma.RevistaWhereInput[];
    OR?: Prisma.RevistaWhereInput[];
    NOT?: Prisma.RevistaWhereInput | Prisma.RevistaWhereInput[];
    id?: Prisma.IntFilter<"Revista"> | number;
    titulo?: Prisma.StringNullableFilter<"Revista"> | string | null;
    tipo?: Prisma.StringNullableFilter<"Revista"> | string | null;
    publicacion?: Prisma.StringNullableFilter<"Revista"> | string | null;
    autor?: Prisma.StringNullableFilter<"Revista"> | string | null;
    descripcion?: Prisma.StringNullableFilter<"Revista"> | string | null;
    link?: Prisma.StringNullableFilter<"Revista"> | string | null;
};
export type RevistaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    publicacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    autor?: Prisma.SortOrderInput | Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    link?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type RevistaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.RevistaWhereInput | Prisma.RevistaWhereInput[];
    OR?: Prisma.RevistaWhereInput[];
    NOT?: Prisma.RevistaWhereInput | Prisma.RevistaWhereInput[];
    titulo?: Prisma.StringNullableFilter<"Revista"> | string | null;
    tipo?: Prisma.StringNullableFilter<"Revista"> | string | null;
    publicacion?: Prisma.StringNullableFilter<"Revista"> | string | null;
    autor?: Prisma.StringNullableFilter<"Revista"> | string | null;
    descripcion?: Prisma.StringNullableFilter<"Revista"> | string | null;
    link?: Prisma.StringNullableFilter<"Revista"> | string | null;
}, "id">;
export type RevistaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    publicacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    autor?: Prisma.SortOrderInput | Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    link?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.RevistaCountOrderByAggregateInput;
    _avg?: Prisma.RevistaAvgOrderByAggregateInput;
    _max?: Prisma.RevistaMaxOrderByAggregateInput;
    _min?: Prisma.RevistaMinOrderByAggregateInput;
    _sum?: Prisma.RevistaSumOrderByAggregateInput;
};
export type RevistaScalarWhereWithAggregatesInput = {
    AND?: Prisma.RevistaScalarWhereWithAggregatesInput | Prisma.RevistaScalarWhereWithAggregatesInput[];
    OR?: Prisma.RevistaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RevistaScalarWhereWithAggregatesInput | Prisma.RevistaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Revista"> | number;
    titulo?: Prisma.StringNullableWithAggregatesFilter<"Revista"> | string | null;
    tipo?: Prisma.StringNullableWithAggregatesFilter<"Revista"> | string | null;
    publicacion?: Prisma.StringNullableWithAggregatesFilter<"Revista"> | string | null;
    autor?: Prisma.StringNullableWithAggregatesFilter<"Revista"> | string | null;
    descripcion?: Prisma.StringNullableWithAggregatesFilter<"Revista"> | string | null;
    link?: Prisma.StringNullableWithAggregatesFilter<"Revista"> | string | null;
};
export type RevistaCreateInput = {
    titulo?: string | null;
    tipo?: string | null;
    publicacion?: string | null;
    autor?: string | null;
    descripcion?: string | null;
    link?: string | null;
};
export type RevistaUncheckedCreateInput = {
    id?: number;
    titulo?: string | null;
    tipo?: string | null;
    publicacion?: string | null;
    autor?: string | null;
    descripcion?: string | null;
    link?: string | null;
};
export type RevistaUpdateInput = {
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type RevistaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type RevistaCreateManyInput = {
    id?: number;
    titulo?: string | null;
    tipo?: string | null;
    publicacion?: string | null;
    autor?: string | null;
    descripcion?: string | null;
    link?: string | null;
};
export type RevistaUpdateManyMutationInput = {
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type RevistaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type RevistaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    publicacion?: Prisma.SortOrder;
    autor?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    link?: Prisma.SortOrder;
};
export type RevistaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type RevistaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    publicacion?: Prisma.SortOrder;
    autor?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    link?: Prisma.SortOrder;
};
export type RevistaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    publicacion?: Prisma.SortOrder;
    autor?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    link?: Prisma.SortOrder;
};
export type RevistaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type RevistaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    tipo?: boolean;
    publicacion?: boolean;
    autor?: boolean;
    descripcion?: boolean;
    link?: boolean;
}, ExtArgs["result"]["revista"]>;
export type RevistaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    tipo?: boolean;
    publicacion?: boolean;
    autor?: boolean;
    descripcion?: boolean;
    link?: boolean;
}, ExtArgs["result"]["revista"]>;
export type RevistaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    tipo?: boolean;
    publicacion?: boolean;
    autor?: boolean;
    descripcion?: boolean;
    link?: boolean;
}, ExtArgs["result"]["revista"]>;
export type RevistaSelectScalar = {
    id?: boolean;
    titulo?: boolean;
    tipo?: boolean;
    publicacion?: boolean;
    autor?: boolean;
    descripcion?: boolean;
    link?: boolean;
};
export type RevistaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "titulo" | "tipo" | "publicacion" | "autor" | "descripcion" | "link", ExtArgs["result"]["revista"]>;
export type $RevistaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Revista";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        titulo: string | null;
        tipo: string | null;
        publicacion: string | null;
        autor: string | null;
        descripcion: string | null;
        link: string | null;
    }, ExtArgs["result"]["revista"]>;
    composites: {};
};
export type RevistaGetPayload<S extends boolean | null | undefined | RevistaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RevistaPayload, S>;
export type RevistaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RevistaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RevistaCountAggregateInputType | true;
};
export interface RevistaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Revista'];
        meta: {
            name: 'Revista';
        };
    };
    findUnique<T extends RevistaFindUniqueArgs>(args: Prisma.SelectSubset<T, RevistaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RevistaClient<runtime.Types.Result.GetResult<Prisma.$RevistaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RevistaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RevistaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RevistaClient<runtime.Types.Result.GetResult<Prisma.$RevistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RevistaFindFirstArgs>(args?: Prisma.SelectSubset<T, RevistaFindFirstArgs<ExtArgs>>): Prisma.Prisma__RevistaClient<runtime.Types.Result.GetResult<Prisma.$RevistaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RevistaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RevistaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RevistaClient<runtime.Types.Result.GetResult<Prisma.$RevistaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RevistaFindManyArgs>(args?: Prisma.SelectSubset<T, RevistaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RevistaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RevistaCreateArgs>(args: Prisma.SelectSubset<T, RevistaCreateArgs<ExtArgs>>): Prisma.Prisma__RevistaClient<runtime.Types.Result.GetResult<Prisma.$RevistaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RevistaCreateManyArgs>(args?: Prisma.SelectSubset<T, RevistaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RevistaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RevistaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RevistaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RevistaDeleteArgs>(args: Prisma.SelectSubset<T, RevistaDeleteArgs<ExtArgs>>): Prisma.Prisma__RevistaClient<runtime.Types.Result.GetResult<Prisma.$RevistaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RevistaUpdateArgs>(args: Prisma.SelectSubset<T, RevistaUpdateArgs<ExtArgs>>): Prisma.Prisma__RevistaClient<runtime.Types.Result.GetResult<Prisma.$RevistaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RevistaDeleteManyArgs>(args?: Prisma.SelectSubset<T, RevistaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RevistaUpdateManyArgs>(args: Prisma.SelectSubset<T, RevistaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RevistaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RevistaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RevistaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RevistaUpsertArgs>(args: Prisma.SelectSubset<T, RevistaUpsertArgs<ExtArgs>>): Prisma.Prisma__RevistaClient<runtime.Types.Result.GetResult<Prisma.$RevistaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RevistaCountArgs>(args?: Prisma.Subset<T, RevistaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RevistaCountAggregateOutputType> : number>;
    aggregate<T extends RevistaAggregateArgs>(args: Prisma.Subset<T, RevistaAggregateArgs>): Prisma.PrismaPromise<GetRevistaAggregateType<T>>;
    groupBy<T extends RevistaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RevistaGroupByArgs['orderBy'];
    } : {
        orderBy?: RevistaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RevistaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRevistaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RevistaFieldRefs;
}
export interface Prisma__RevistaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RevistaFieldRefs {
    readonly id: Prisma.FieldRef<"Revista", 'Int'>;
    readonly titulo: Prisma.FieldRef<"Revista", 'String'>;
    readonly tipo: Prisma.FieldRef<"Revista", 'String'>;
    readonly publicacion: Prisma.FieldRef<"Revista", 'String'>;
    readonly autor: Prisma.FieldRef<"Revista", 'String'>;
    readonly descripcion: Prisma.FieldRef<"Revista", 'String'>;
    readonly link: Prisma.FieldRef<"Revista", 'String'>;
}
export type RevistaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevistaSelect<ExtArgs> | null;
    omit?: Prisma.RevistaOmit<ExtArgs> | null;
    where: Prisma.RevistaWhereUniqueInput;
};
export type RevistaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevistaSelect<ExtArgs> | null;
    omit?: Prisma.RevistaOmit<ExtArgs> | null;
    where: Prisma.RevistaWhereUniqueInput;
};
export type RevistaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevistaSelect<ExtArgs> | null;
    omit?: Prisma.RevistaOmit<ExtArgs> | null;
    where?: Prisma.RevistaWhereInput;
    orderBy?: Prisma.RevistaOrderByWithRelationInput | Prisma.RevistaOrderByWithRelationInput[];
    cursor?: Prisma.RevistaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RevistaScalarFieldEnum | Prisma.RevistaScalarFieldEnum[];
};
export type RevistaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevistaSelect<ExtArgs> | null;
    omit?: Prisma.RevistaOmit<ExtArgs> | null;
    where?: Prisma.RevistaWhereInput;
    orderBy?: Prisma.RevistaOrderByWithRelationInput | Prisma.RevistaOrderByWithRelationInput[];
    cursor?: Prisma.RevistaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RevistaScalarFieldEnum | Prisma.RevistaScalarFieldEnum[];
};
export type RevistaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevistaSelect<ExtArgs> | null;
    omit?: Prisma.RevistaOmit<ExtArgs> | null;
    where?: Prisma.RevistaWhereInput;
    orderBy?: Prisma.RevistaOrderByWithRelationInput | Prisma.RevistaOrderByWithRelationInput[];
    cursor?: Prisma.RevistaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RevistaScalarFieldEnum | Prisma.RevistaScalarFieldEnum[];
};
export type RevistaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevistaSelect<ExtArgs> | null;
    omit?: Prisma.RevistaOmit<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.RevistaCreateInput, Prisma.RevistaUncheckedCreateInput>;
};
export type RevistaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RevistaCreateManyInput | Prisma.RevistaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RevistaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevistaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RevistaOmit<ExtArgs> | null;
    data: Prisma.RevistaCreateManyInput | Prisma.RevistaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RevistaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevistaSelect<ExtArgs> | null;
    omit?: Prisma.RevistaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RevistaUpdateInput, Prisma.RevistaUncheckedUpdateInput>;
    where: Prisma.RevistaWhereUniqueInput;
};
export type RevistaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RevistaUpdateManyMutationInput, Prisma.RevistaUncheckedUpdateManyInput>;
    where?: Prisma.RevistaWhereInput;
    limit?: number;
};
export type RevistaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevistaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RevistaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RevistaUpdateManyMutationInput, Prisma.RevistaUncheckedUpdateManyInput>;
    where?: Prisma.RevistaWhereInput;
    limit?: number;
};
export type RevistaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevistaSelect<ExtArgs> | null;
    omit?: Prisma.RevistaOmit<ExtArgs> | null;
    where: Prisma.RevistaWhereUniqueInput;
    create: Prisma.XOR<Prisma.RevistaCreateInput, Prisma.RevistaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RevistaUpdateInput, Prisma.RevistaUncheckedUpdateInput>;
};
export type RevistaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevistaSelect<ExtArgs> | null;
    omit?: Prisma.RevistaOmit<ExtArgs> | null;
    where: Prisma.RevistaWhereUniqueInput;
};
export type RevistaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RevistaWhereInput;
    limit?: number;
};
export type RevistaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevistaSelect<ExtArgs> | null;
    omit?: Prisma.RevistaOmit<ExtArgs> | null;
};
