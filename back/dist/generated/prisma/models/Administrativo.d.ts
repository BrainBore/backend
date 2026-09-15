import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type AdministrativoModel = runtime.Types.Result.DefaultSelection<Prisma.$AdministrativoPayload>;
export type AggregateAdministrativo = {
    _count: AdministrativoCountAggregateOutputType | null;
    _avg: AdministrativoAvgAggregateOutputType | null;
    _sum: AdministrativoSumAggregateOutputType | null;
    _min: AdministrativoMinAggregateOutputType | null;
    _max: AdministrativoMaxAggregateOutputType | null;
};
export type AdministrativoAvgAggregateOutputType = {
    id: number | null;
};
export type AdministrativoSumAggregateOutputType = {
    id: number | null;
};
export type AdministrativoMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    cargo: string | null;
    correoInstitucional: string | null;
    foto: string | null;
};
export type AdministrativoMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    cargo: string | null;
    correoInstitucional: string | null;
    foto: string | null;
};
export type AdministrativoCountAggregateOutputType = {
    id: number;
    nombre: number;
    cargo: number;
    correoInstitucional: number;
    foto: number;
    _all: number;
};
export type AdministrativoAvgAggregateInputType = {
    id?: true;
};
export type AdministrativoSumAggregateInputType = {
    id?: true;
};
export type AdministrativoMinAggregateInputType = {
    id?: true;
    nombre?: true;
    cargo?: true;
    correoInstitucional?: true;
    foto?: true;
};
export type AdministrativoMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    cargo?: true;
    correoInstitucional?: true;
    foto?: true;
};
export type AdministrativoCountAggregateInputType = {
    id?: true;
    nombre?: true;
    cargo?: true;
    correoInstitucional?: true;
    foto?: true;
    _all?: true;
};
export type AdministrativoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdministrativoWhereInput;
    orderBy?: Prisma.AdministrativoOrderByWithRelationInput | Prisma.AdministrativoOrderByWithRelationInput[];
    cursor?: Prisma.AdministrativoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AdministrativoCountAggregateInputType;
    _avg?: AdministrativoAvgAggregateInputType;
    _sum?: AdministrativoSumAggregateInputType;
    _min?: AdministrativoMinAggregateInputType;
    _max?: AdministrativoMaxAggregateInputType;
};
export type GetAdministrativoAggregateType<T extends AdministrativoAggregateArgs> = {
    [P in keyof T & keyof AggregateAdministrativo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAdministrativo[P]> : Prisma.GetScalarType<T[P], AggregateAdministrativo[P]>;
};
export type AdministrativoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdministrativoWhereInput;
    orderBy?: Prisma.AdministrativoOrderByWithAggregationInput | Prisma.AdministrativoOrderByWithAggregationInput[];
    by: Prisma.AdministrativoScalarFieldEnum[] | Prisma.AdministrativoScalarFieldEnum;
    having?: Prisma.AdministrativoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdministrativoCountAggregateInputType | true;
    _avg?: AdministrativoAvgAggregateInputType;
    _sum?: AdministrativoSumAggregateInputType;
    _min?: AdministrativoMinAggregateInputType;
    _max?: AdministrativoMaxAggregateInputType;
};
export type AdministrativoGroupByOutputType = {
    id: number;
    nombre: string;
    cargo: string;
    correoInstitucional: string;
    foto: string;
    _count: AdministrativoCountAggregateOutputType | null;
    _avg: AdministrativoAvgAggregateOutputType | null;
    _sum: AdministrativoSumAggregateOutputType | null;
    _min: AdministrativoMinAggregateOutputType | null;
    _max: AdministrativoMaxAggregateOutputType | null;
};
export type GetAdministrativoGroupByPayload<T extends AdministrativoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AdministrativoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AdministrativoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AdministrativoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AdministrativoGroupByOutputType[P]>;
}>>;
export type AdministrativoWhereInput = {
    AND?: Prisma.AdministrativoWhereInput | Prisma.AdministrativoWhereInput[];
    OR?: Prisma.AdministrativoWhereInput[];
    NOT?: Prisma.AdministrativoWhereInput | Prisma.AdministrativoWhereInput[];
    id?: Prisma.IntFilter<"Administrativo"> | number;
    nombre?: Prisma.StringFilter<"Administrativo"> | string;
    cargo?: Prisma.StringFilter<"Administrativo"> | string;
    correoInstitucional?: Prisma.StringFilter<"Administrativo"> | string;
    foto?: Prisma.StringFilter<"Administrativo"> | string;
};
export type AdministrativoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    correoInstitucional?: Prisma.SortOrder;
    foto?: Prisma.SortOrder;
};
export type AdministrativoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.AdministrativoWhereInput | Prisma.AdministrativoWhereInput[];
    OR?: Prisma.AdministrativoWhereInput[];
    NOT?: Prisma.AdministrativoWhereInput | Prisma.AdministrativoWhereInput[];
    nombre?: Prisma.StringFilter<"Administrativo"> | string;
    cargo?: Prisma.StringFilter<"Administrativo"> | string;
    correoInstitucional?: Prisma.StringFilter<"Administrativo"> | string;
    foto?: Prisma.StringFilter<"Administrativo"> | string;
}, "id">;
export type AdministrativoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    correoInstitucional?: Prisma.SortOrder;
    foto?: Prisma.SortOrder;
    _count?: Prisma.AdministrativoCountOrderByAggregateInput;
    _avg?: Prisma.AdministrativoAvgOrderByAggregateInput;
    _max?: Prisma.AdministrativoMaxOrderByAggregateInput;
    _min?: Prisma.AdministrativoMinOrderByAggregateInput;
    _sum?: Prisma.AdministrativoSumOrderByAggregateInput;
};
export type AdministrativoScalarWhereWithAggregatesInput = {
    AND?: Prisma.AdministrativoScalarWhereWithAggregatesInput | Prisma.AdministrativoScalarWhereWithAggregatesInput[];
    OR?: Prisma.AdministrativoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AdministrativoScalarWhereWithAggregatesInput | Prisma.AdministrativoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Administrativo"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Administrativo"> | string;
    cargo?: Prisma.StringWithAggregatesFilter<"Administrativo"> | string;
    correoInstitucional?: Prisma.StringWithAggregatesFilter<"Administrativo"> | string;
    foto?: Prisma.StringWithAggregatesFilter<"Administrativo"> | string;
};
export type AdministrativoCreateInput = {
    nombre: string;
    cargo: string;
    correoInstitucional: string;
    foto: string;
};
export type AdministrativoUncheckedCreateInput = {
    id?: number;
    nombre: string;
    cargo: string;
    correoInstitucional: string;
    foto: string;
};
export type AdministrativoUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    correoInstitucional?: Prisma.StringFieldUpdateOperationsInput | string;
    foto?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdministrativoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    correoInstitucional?: Prisma.StringFieldUpdateOperationsInput | string;
    foto?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdministrativoCreateManyInput = {
    id?: number;
    nombre: string;
    cargo: string;
    correoInstitucional: string;
    foto: string;
};
export type AdministrativoUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    correoInstitucional?: Prisma.StringFieldUpdateOperationsInput | string;
    foto?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdministrativoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    correoInstitucional?: Prisma.StringFieldUpdateOperationsInput | string;
    foto?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdministrativoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    correoInstitucional?: Prisma.SortOrder;
    foto?: Prisma.SortOrder;
};
export type AdministrativoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type AdministrativoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    correoInstitucional?: Prisma.SortOrder;
    foto?: Prisma.SortOrder;
};
export type AdministrativoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    correoInstitucional?: Prisma.SortOrder;
    foto?: Prisma.SortOrder;
};
export type AdministrativoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type AdministrativoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    cargo?: boolean;
    correoInstitucional?: boolean;
    foto?: boolean;
}, ExtArgs["result"]["administrativo"]>;
export type AdministrativoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    cargo?: boolean;
    correoInstitucional?: boolean;
    foto?: boolean;
}, ExtArgs["result"]["administrativo"]>;
export type AdministrativoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    cargo?: boolean;
    correoInstitucional?: boolean;
    foto?: boolean;
}, ExtArgs["result"]["administrativo"]>;
export type AdministrativoSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    cargo?: boolean;
    correoInstitucional?: boolean;
    foto?: boolean;
};
export type AdministrativoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "cargo" | "correoInstitucional" | "foto", ExtArgs["result"]["administrativo"]>;
export type $AdministrativoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Administrativo";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        cargo: string;
        correoInstitucional: string;
        foto: string;
    }, ExtArgs["result"]["administrativo"]>;
    composites: {};
};
export type AdministrativoGetPayload<S extends boolean | null | undefined | AdministrativoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AdministrativoPayload, S>;
export type AdministrativoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AdministrativoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdministrativoCountAggregateInputType | true;
};
export interface AdministrativoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Administrativo'];
        meta: {
            name: 'Administrativo';
        };
    };
    findUnique<T extends AdministrativoFindUniqueArgs>(args: Prisma.SelectSubset<T, AdministrativoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AdministrativoClient<runtime.Types.Result.GetResult<Prisma.$AdministrativoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AdministrativoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AdministrativoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdministrativoClient<runtime.Types.Result.GetResult<Prisma.$AdministrativoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AdministrativoFindFirstArgs>(args?: Prisma.SelectSubset<T, AdministrativoFindFirstArgs<ExtArgs>>): Prisma.Prisma__AdministrativoClient<runtime.Types.Result.GetResult<Prisma.$AdministrativoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AdministrativoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AdministrativoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdministrativoClient<runtime.Types.Result.GetResult<Prisma.$AdministrativoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AdministrativoFindManyArgs>(args?: Prisma.SelectSubset<T, AdministrativoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdministrativoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AdministrativoCreateArgs>(args: Prisma.SelectSubset<T, AdministrativoCreateArgs<ExtArgs>>): Prisma.Prisma__AdministrativoClient<runtime.Types.Result.GetResult<Prisma.$AdministrativoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AdministrativoCreateManyArgs>(args?: Prisma.SelectSubset<T, AdministrativoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AdministrativoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AdministrativoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdministrativoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AdministrativoDeleteArgs>(args: Prisma.SelectSubset<T, AdministrativoDeleteArgs<ExtArgs>>): Prisma.Prisma__AdministrativoClient<runtime.Types.Result.GetResult<Prisma.$AdministrativoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AdministrativoUpdateArgs>(args: Prisma.SelectSubset<T, AdministrativoUpdateArgs<ExtArgs>>): Prisma.Prisma__AdministrativoClient<runtime.Types.Result.GetResult<Prisma.$AdministrativoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AdministrativoDeleteManyArgs>(args?: Prisma.SelectSubset<T, AdministrativoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AdministrativoUpdateManyArgs>(args: Prisma.SelectSubset<T, AdministrativoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AdministrativoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AdministrativoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdministrativoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AdministrativoUpsertArgs>(args: Prisma.SelectSubset<T, AdministrativoUpsertArgs<ExtArgs>>): Prisma.Prisma__AdministrativoClient<runtime.Types.Result.GetResult<Prisma.$AdministrativoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AdministrativoCountArgs>(args?: Prisma.Subset<T, AdministrativoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AdministrativoCountAggregateOutputType> : number>;
    aggregate<T extends AdministrativoAggregateArgs>(args: Prisma.Subset<T, AdministrativoAggregateArgs>): Prisma.PrismaPromise<GetAdministrativoAggregateType<T>>;
    groupBy<T extends AdministrativoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AdministrativoGroupByArgs['orderBy'];
    } : {
        orderBy?: AdministrativoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AdministrativoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdministrativoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AdministrativoFieldRefs;
}
export interface Prisma__AdministrativoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AdministrativoFieldRefs {
    readonly id: Prisma.FieldRef<"Administrativo", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Administrativo", 'String'>;
    readonly cargo: Prisma.FieldRef<"Administrativo", 'String'>;
    readonly correoInstitucional: Prisma.FieldRef<"Administrativo", 'String'>;
    readonly foto: Prisma.FieldRef<"Administrativo", 'String'>;
}
export type AdministrativoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrativoSelect<ExtArgs> | null;
    omit?: Prisma.AdministrativoOmit<ExtArgs> | null;
    where: Prisma.AdministrativoWhereUniqueInput;
};
export type AdministrativoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrativoSelect<ExtArgs> | null;
    omit?: Prisma.AdministrativoOmit<ExtArgs> | null;
    where: Prisma.AdministrativoWhereUniqueInput;
};
export type AdministrativoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrativoSelect<ExtArgs> | null;
    omit?: Prisma.AdministrativoOmit<ExtArgs> | null;
    where?: Prisma.AdministrativoWhereInput;
    orderBy?: Prisma.AdministrativoOrderByWithRelationInput | Prisma.AdministrativoOrderByWithRelationInput[];
    cursor?: Prisma.AdministrativoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdministrativoScalarFieldEnum | Prisma.AdministrativoScalarFieldEnum[];
};
export type AdministrativoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrativoSelect<ExtArgs> | null;
    omit?: Prisma.AdministrativoOmit<ExtArgs> | null;
    where?: Prisma.AdministrativoWhereInput;
    orderBy?: Prisma.AdministrativoOrderByWithRelationInput | Prisma.AdministrativoOrderByWithRelationInput[];
    cursor?: Prisma.AdministrativoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdministrativoScalarFieldEnum | Prisma.AdministrativoScalarFieldEnum[];
};
export type AdministrativoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrativoSelect<ExtArgs> | null;
    omit?: Prisma.AdministrativoOmit<ExtArgs> | null;
    where?: Prisma.AdministrativoWhereInput;
    orderBy?: Prisma.AdministrativoOrderByWithRelationInput | Prisma.AdministrativoOrderByWithRelationInput[];
    cursor?: Prisma.AdministrativoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdministrativoScalarFieldEnum | Prisma.AdministrativoScalarFieldEnum[];
};
export type AdministrativoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrativoSelect<ExtArgs> | null;
    omit?: Prisma.AdministrativoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdministrativoCreateInput, Prisma.AdministrativoUncheckedCreateInput>;
};
export type AdministrativoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AdministrativoCreateManyInput | Prisma.AdministrativoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AdministrativoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrativoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdministrativoOmit<ExtArgs> | null;
    data: Prisma.AdministrativoCreateManyInput | Prisma.AdministrativoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AdministrativoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrativoSelect<ExtArgs> | null;
    omit?: Prisma.AdministrativoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdministrativoUpdateInput, Prisma.AdministrativoUncheckedUpdateInput>;
    where: Prisma.AdministrativoWhereUniqueInput;
};
export type AdministrativoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AdministrativoUpdateManyMutationInput, Prisma.AdministrativoUncheckedUpdateManyInput>;
    where?: Prisma.AdministrativoWhereInput;
    limit?: number;
};
export type AdministrativoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrativoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdministrativoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdministrativoUpdateManyMutationInput, Prisma.AdministrativoUncheckedUpdateManyInput>;
    where?: Prisma.AdministrativoWhereInput;
    limit?: number;
};
export type AdministrativoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrativoSelect<ExtArgs> | null;
    omit?: Prisma.AdministrativoOmit<ExtArgs> | null;
    where: Prisma.AdministrativoWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdministrativoCreateInput, Prisma.AdministrativoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AdministrativoUpdateInput, Prisma.AdministrativoUncheckedUpdateInput>;
};
export type AdministrativoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrativoSelect<ExtArgs> | null;
    omit?: Prisma.AdministrativoOmit<ExtArgs> | null;
    where: Prisma.AdministrativoWhereUniqueInput;
};
export type AdministrativoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdministrativoWhereInput;
    limit?: number;
};
export type AdministrativoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrativoSelect<ExtArgs> | null;
    omit?: Prisma.AdministrativoOmit<ExtArgs> | null;
};
