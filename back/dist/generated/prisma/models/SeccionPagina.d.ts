import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type SeccionPaginaModel = runtime.Types.Result.DefaultSelection<Prisma.$SeccionPaginaPayload>;
export type AggregateSeccionPagina = {
    _count: SeccionPaginaCountAggregateOutputType | null;
    _min: SeccionPaginaMinAggregateOutputType | null;
    _max: SeccionPaginaMaxAggregateOutputType | null;
};
export type SeccionPaginaMinAggregateOutputType = {
    claveCampo: string | null;
    paginaSlug: string | null;
    valor: string | null;
    tipo: string | null;
};
export type SeccionPaginaMaxAggregateOutputType = {
    claveCampo: string | null;
    paginaSlug: string | null;
    valor: string | null;
    tipo: string | null;
};
export type SeccionPaginaCountAggregateOutputType = {
    claveCampo: number;
    paginaSlug: number;
    valor: number;
    tipo: number;
    _all: number;
};
export type SeccionPaginaMinAggregateInputType = {
    claveCampo?: true;
    paginaSlug?: true;
    valor?: true;
    tipo?: true;
};
export type SeccionPaginaMaxAggregateInputType = {
    claveCampo?: true;
    paginaSlug?: true;
    valor?: true;
    tipo?: true;
};
export type SeccionPaginaCountAggregateInputType = {
    claveCampo?: true;
    paginaSlug?: true;
    valor?: true;
    tipo?: true;
    _all?: true;
};
export type SeccionPaginaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SeccionPaginaWhereInput;
    orderBy?: Prisma.SeccionPaginaOrderByWithRelationInput | Prisma.SeccionPaginaOrderByWithRelationInput[];
    cursor?: Prisma.SeccionPaginaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SeccionPaginaCountAggregateInputType;
    _min?: SeccionPaginaMinAggregateInputType;
    _max?: SeccionPaginaMaxAggregateInputType;
};
export type GetSeccionPaginaAggregateType<T extends SeccionPaginaAggregateArgs> = {
    [P in keyof T & keyof AggregateSeccionPagina]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSeccionPagina[P]> : Prisma.GetScalarType<T[P], AggregateSeccionPagina[P]>;
};
export type SeccionPaginaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SeccionPaginaWhereInput;
    orderBy?: Prisma.SeccionPaginaOrderByWithAggregationInput | Prisma.SeccionPaginaOrderByWithAggregationInput[];
    by: Prisma.SeccionPaginaScalarFieldEnum[] | Prisma.SeccionPaginaScalarFieldEnum;
    having?: Prisma.SeccionPaginaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SeccionPaginaCountAggregateInputType | true;
    _min?: SeccionPaginaMinAggregateInputType;
    _max?: SeccionPaginaMaxAggregateInputType;
};
export type SeccionPaginaGroupByOutputType = {
    claveCampo: string;
    paginaSlug: string;
    valor: string;
    tipo: string;
    _count: SeccionPaginaCountAggregateOutputType | null;
    _min: SeccionPaginaMinAggregateOutputType | null;
    _max: SeccionPaginaMaxAggregateOutputType | null;
};
export type GetSeccionPaginaGroupByPayload<T extends SeccionPaginaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SeccionPaginaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SeccionPaginaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SeccionPaginaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SeccionPaginaGroupByOutputType[P]>;
}>>;
export type SeccionPaginaWhereInput = {
    AND?: Prisma.SeccionPaginaWhereInput | Prisma.SeccionPaginaWhereInput[];
    OR?: Prisma.SeccionPaginaWhereInput[];
    NOT?: Prisma.SeccionPaginaWhereInput | Prisma.SeccionPaginaWhereInput[];
    claveCampo?: Prisma.StringFilter<"SeccionPagina"> | string;
    paginaSlug?: Prisma.StringFilter<"SeccionPagina"> | string;
    valor?: Prisma.StringFilter<"SeccionPagina"> | string;
    tipo?: Prisma.StringFilter<"SeccionPagina"> | string;
};
export type SeccionPaginaOrderByWithRelationInput = {
    claveCampo?: Prisma.SortOrder;
    paginaSlug?: Prisma.SortOrder;
    valor?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
};
export type SeccionPaginaWhereUniqueInput = Prisma.AtLeast<{
    claveCampo?: string;
    AND?: Prisma.SeccionPaginaWhereInput | Prisma.SeccionPaginaWhereInput[];
    OR?: Prisma.SeccionPaginaWhereInput[];
    NOT?: Prisma.SeccionPaginaWhereInput | Prisma.SeccionPaginaWhereInput[];
    paginaSlug?: Prisma.StringFilter<"SeccionPagina"> | string;
    valor?: Prisma.StringFilter<"SeccionPagina"> | string;
    tipo?: Prisma.StringFilter<"SeccionPagina"> | string;
}, "claveCampo">;
export type SeccionPaginaOrderByWithAggregationInput = {
    claveCampo?: Prisma.SortOrder;
    paginaSlug?: Prisma.SortOrder;
    valor?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    _count?: Prisma.SeccionPaginaCountOrderByAggregateInput;
    _max?: Prisma.SeccionPaginaMaxOrderByAggregateInput;
    _min?: Prisma.SeccionPaginaMinOrderByAggregateInput;
};
export type SeccionPaginaScalarWhereWithAggregatesInput = {
    AND?: Prisma.SeccionPaginaScalarWhereWithAggregatesInput | Prisma.SeccionPaginaScalarWhereWithAggregatesInput[];
    OR?: Prisma.SeccionPaginaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SeccionPaginaScalarWhereWithAggregatesInput | Prisma.SeccionPaginaScalarWhereWithAggregatesInput[];
    claveCampo?: Prisma.StringWithAggregatesFilter<"SeccionPagina"> | string;
    paginaSlug?: Prisma.StringWithAggregatesFilter<"SeccionPagina"> | string;
    valor?: Prisma.StringWithAggregatesFilter<"SeccionPagina"> | string;
    tipo?: Prisma.StringWithAggregatesFilter<"SeccionPagina"> | string;
};
export type SeccionPaginaCreateInput = {
    claveCampo: string;
    paginaSlug: string;
    valor: string;
    tipo: string;
};
export type SeccionPaginaUncheckedCreateInput = {
    claveCampo: string;
    paginaSlug: string;
    valor: string;
    tipo: string;
};
export type SeccionPaginaUpdateInput = {
    claveCampo?: Prisma.StringFieldUpdateOperationsInput | string;
    paginaSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    valor?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SeccionPaginaUncheckedUpdateInput = {
    claveCampo?: Prisma.StringFieldUpdateOperationsInput | string;
    paginaSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    valor?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SeccionPaginaCreateManyInput = {
    claveCampo: string;
    paginaSlug: string;
    valor: string;
    tipo: string;
};
export type SeccionPaginaUpdateManyMutationInput = {
    claveCampo?: Prisma.StringFieldUpdateOperationsInput | string;
    paginaSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    valor?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SeccionPaginaUncheckedUpdateManyInput = {
    claveCampo?: Prisma.StringFieldUpdateOperationsInput | string;
    paginaSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    valor?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SeccionPaginaCountOrderByAggregateInput = {
    claveCampo?: Prisma.SortOrder;
    paginaSlug?: Prisma.SortOrder;
    valor?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
};
export type SeccionPaginaMaxOrderByAggregateInput = {
    claveCampo?: Prisma.SortOrder;
    paginaSlug?: Prisma.SortOrder;
    valor?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
};
export type SeccionPaginaMinOrderByAggregateInput = {
    claveCampo?: Prisma.SortOrder;
    paginaSlug?: Prisma.SortOrder;
    valor?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
};
export type SeccionPaginaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    claveCampo?: boolean;
    paginaSlug?: boolean;
    valor?: boolean;
    tipo?: boolean;
}, ExtArgs["result"]["seccionPagina"]>;
export type SeccionPaginaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    claveCampo?: boolean;
    paginaSlug?: boolean;
    valor?: boolean;
    tipo?: boolean;
}, ExtArgs["result"]["seccionPagina"]>;
export type SeccionPaginaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    claveCampo?: boolean;
    paginaSlug?: boolean;
    valor?: boolean;
    tipo?: boolean;
}, ExtArgs["result"]["seccionPagina"]>;
export type SeccionPaginaSelectScalar = {
    claveCampo?: boolean;
    paginaSlug?: boolean;
    valor?: boolean;
    tipo?: boolean;
};
export type SeccionPaginaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"claveCampo" | "paginaSlug" | "valor" | "tipo", ExtArgs["result"]["seccionPagina"]>;
export type $SeccionPaginaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SeccionPagina";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        claveCampo: string;
        paginaSlug: string;
        valor: string;
        tipo: string;
    }, ExtArgs["result"]["seccionPagina"]>;
    composites: {};
};
export type SeccionPaginaGetPayload<S extends boolean | null | undefined | SeccionPaginaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SeccionPaginaPayload, S>;
export type SeccionPaginaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SeccionPaginaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SeccionPaginaCountAggregateInputType | true;
};
export interface SeccionPaginaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SeccionPagina'];
        meta: {
            name: 'SeccionPagina';
        };
    };
    findUnique<T extends SeccionPaginaFindUniqueArgs>(args: Prisma.SelectSubset<T, SeccionPaginaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SeccionPaginaClient<runtime.Types.Result.GetResult<Prisma.$SeccionPaginaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SeccionPaginaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SeccionPaginaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SeccionPaginaClient<runtime.Types.Result.GetResult<Prisma.$SeccionPaginaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SeccionPaginaFindFirstArgs>(args?: Prisma.SelectSubset<T, SeccionPaginaFindFirstArgs<ExtArgs>>): Prisma.Prisma__SeccionPaginaClient<runtime.Types.Result.GetResult<Prisma.$SeccionPaginaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SeccionPaginaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SeccionPaginaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SeccionPaginaClient<runtime.Types.Result.GetResult<Prisma.$SeccionPaginaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SeccionPaginaFindManyArgs>(args?: Prisma.SelectSubset<T, SeccionPaginaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SeccionPaginaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SeccionPaginaCreateArgs>(args: Prisma.SelectSubset<T, SeccionPaginaCreateArgs<ExtArgs>>): Prisma.Prisma__SeccionPaginaClient<runtime.Types.Result.GetResult<Prisma.$SeccionPaginaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SeccionPaginaCreateManyArgs>(args?: Prisma.SelectSubset<T, SeccionPaginaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SeccionPaginaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SeccionPaginaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SeccionPaginaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SeccionPaginaDeleteArgs>(args: Prisma.SelectSubset<T, SeccionPaginaDeleteArgs<ExtArgs>>): Prisma.Prisma__SeccionPaginaClient<runtime.Types.Result.GetResult<Prisma.$SeccionPaginaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SeccionPaginaUpdateArgs>(args: Prisma.SelectSubset<T, SeccionPaginaUpdateArgs<ExtArgs>>): Prisma.Prisma__SeccionPaginaClient<runtime.Types.Result.GetResult<Prisma.$SeccionPaginaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SeccionPaginaDeleteManyArgs>(args?: Prisma.SelectSubset<T, SeccionPaginaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SeccionPaginaUpdateManyArgs>(args: Prisma.SelectSubset<T, SeccionPaginaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SeccionPaginaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SeccionPaginaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SeccionPaginaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SeccionPaginaUpsertArgs>(args: Prisma.SelectSubset<T, SeccionPaginaUpsertArgs<ExtArgs>>): Prisma.Prisma__SeccionPaginaClient<runtime.Types.Result.GetResult<Prisma.$SeccionPaginaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SeccionPaginaCountArgs>(args?: Prisma.Subset<T, SeccionPaginaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SeccionPaginaCountAggregateOutputType> : number>;
    aggregate<T extends SeccionPaginaAggregateArgs>(args: Prisma.Subset<T, SeccionPaginaAggregateArgs>): Prisma.PrismaPromise<GetSeccionPaginaAggregateType<T>>;
    groupBy<T extends SeccionPaginaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SeccionPaginaGroupByArgs['orderBy'];
    } : {
        orderBy?: SeccionPaginaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SeccionPaginaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeccionPaginaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SeccionPaginaFieldRefs;
}
export interface Prisma__SeccionPaginaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SeccionPaginaFieldRefs {
    readonly claveCampo: Prisma.FieldRef<"SeccionPagina", 'String'>;
    readonly paginaSlug: Prisma.FieldRef<"SeccionPagina", 'String'>;
    readonly valor: Prisma.FieldRef<"SeccionPagina", 'String'>;
    readonly tipo: Prisma.FieldRef<"SeccionPagina", 'String'>;
}
export type SeccionPaginaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeccionPaginaSelect<ExtArgs> | null;
    omit?: Prisma.SeccionPaginaOmit<ExtArgs> | null;
    where: Prisma.SeccionPaginaWhereUniqueInput;
};
export type SeccionPaginaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeccionPaginaSelect<ExtArgs> | null;
    omit?: Prisma.SeccionPaginaOmit<ExtArgs> | null;
    where: Prisma.SeccionPaginaWhereUniqueInput;
};
export type SeccionPaginaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeccionPaginaSelect<ExtArgs> | null;
    omit?: Prisma.SeccionPaginaOmit<ExtArgs> | null;
    where?: Prisma.SeccionPaginaWhereInput;
    orderBy?: Prisma.SeccionPaginaOrderByWithRelationInput | Prisma.SeccionPaginaOrderByWithRelationInput[];
    cursor?: Prisma.SeccionPaginaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SeccionPaginaScalarFieldEnum | Prisma.SeccionPaginaScalarFieldEnum[];
};
export type SeccionPaginaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeccionPaginaSelect<ExtArgs> | null;
    omit?: Prisma.SeccionPaginaOmit<ExtArgs> | null;
    where?: Prisma.SeccionPaginaWhereInput;
    orderBy?: Prisma.SeccionPaginaOrderByWithRelationInput | Prisma.SeccionPaginaOrderByWithRelationInput[];
    cursor?: Prisma.SeccionPaginaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SeccionPaginaScalarFieldEnum | Prisma.SeccionPaginaScalarFieldEnum[];
};
export type SeccionPaginaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeccionPaginaSelect<ExtArgs> | null;
    omit?: Prisma.SeccionPaginaOmit<ExtArgs> | null;
    where?: Prisma.SeccionPaginaWhereInput;
    orderBy?: Prisma.SeccionPaginaOrderByWithRelationInput | Prisma.SeccionPaginaOrderByWithRelationInput[];
    cursor?: Prisma.SeccionPaginaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SeccionPaginaScalarFieldEnum | Prisma.SeccionPaginaScalarFieldEnum[];
};
export type SeccionPaginaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeccionPaginaSelect<ExtArgs> | null;
    omit?: Prisma.SeccionPaginaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SeccionPaginaCreateInput, Prisma.SeccionPaginaUncheckedCreateInput>;
};
export type SeccionPaginaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SeccionPaginaCreateManyInput | Prisma.SeccionPaginaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SeccionPaginaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeccionPaginaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SeccionPaginaOmit<ExtArgs> | null;
    data: Prisma.SeccionPaginaCreateManyInput | Prisma.SeccionPaginaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SeccionPaginaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeccionPaginaSelect<ExtArgs> | null;
    omit?: Prisma.SeccionPaginaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SeccionPaginaUpdateInput, Prisma.SeccionPaginaUncheckedUpdateInput>;
    where: Prisma.SeccionPaginaWhereUniqueInput;
};
export type SeccionPaginaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SeccionPaginaUpdateManyMutationInput, Prisma.SeccionPaginaUncheckedUpdateManyInput>;
    where?: Prisma.SeccionPaginaWhereInput;
    limit?: number;
};
export type SeccionPaginaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeccionPaginaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SeccionPaginaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SeccionPaginaUpdateManyMutationInput, Prisma.SeccionPaginaUncheckedUpdateManyInput>;
    where?: Prisma.SeccionPaginaWhereInput;
    limit?: number;
};
export type SeccionPaginaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeccionPaginaSelect<ExtArgs> | null;
    omit?: Prisma.SeccionPaginaOmit<ExtArgs> | null;
    where: Prisma.SeccionPaginaWhereUniqueInput;
    create: Prisma.XOR<Prisma.SeccionPaginaCreateInput, Prisma.SeccionPaginaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SeccionPaginaUpdateInput, Prisma.SeccionPaginaUncheckedUpdateInput>;
};
export type SeccionPaginaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeccionPaginaSelect<ExtArgs> | null;
    omit?: Prisma.SeccionPaginaOmit<ExtArgs> | null;
    where: Prisma.SeccionPaginaWhereUniqueInput;
};
export type SeccionPaginaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SeccionPaginaWhereInput;
    limit?: number;
};
export type SeccionPaginaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeccionPaginaSelect<ExtArgs> | null;
    omit?: Prisma.SeccionPaginaOmit<ExtArgs> | null;
};
