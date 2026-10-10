import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type AutorModel = runtime.Types.Result.DefaultSelection<Prisma.$AutorPayload>;
export type AggregateAutor = {
    _count: AutorCountAggregateOutputType | null;
    _avg: AutorAvgAggregateOutputType | null;
    _sum: AutorSumAggregateOutputType | null;
    _min: AutorMinAggregateOutputType | null;
    _max: AutorMaxAggregateOutputType | null;
};
export type AutorAvgAggregateOutputType = {
    id: number | null;
};
export type AutorSumAggregateOutputType = {
    id: number | null;
};
export type AutorMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    area: string | null;
    tipo: string | null;
    ubicacion: string | null;
};
export type AutorMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    area: string | null;
    tipo: string | null;
    ubicacion: string | null;
};
export type AutorCountAggregateOutputType = {
    id: number;
    nombre: number;
    area: number;
    tipo: number;
    ubicacion: number;
    _all: number;
};
export type AutorAvgAggregateInputType = {
    id?: true;
};
export type AutorSumAggregateInputType = {
    id?: true;
};
export type AutorMinAggregateInputType = {
    id?: true;
    nombre?: true;
    area?: true;
    tipo?: true;
    ubicacion?: true;
};
export type AutorMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    area?: true;
    tipo?: true;
    ubicacion?: true;
};
export type AutorCountAggregateInputType = {
    id?: true;
    nombre?: true;
    area?: true;
    tipo?: true;
    ubicacion?: true;
    _all?: true;
};
export type AutorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AutorWhereInput;
    orderBy?: Prisma.AutorOrderByWithRelationInput | Prisma.AutorOrderByWithRelationInput[];
    cursor?: Prisma.AutorWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AutorCountAggregateInputType;
    _avg?: AutorAvgAggregateInputType;
    _sum?: AutorSumAggregateInputType;
    _min?: AutorMinAggregateInputType;
    _max?: AutorMaxAggregateInputType;
};
export type GetAutorAggregateType<T extends AutorAggregateArgs> = {
    [P in keyof T & keyof AggregateAutor]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAutor[P]> : Prisma.GetScalarType<T[P], AggregateAutor[P]>;
};
export type AutorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AutorWhereInput;
    orderBy?: Prisma.AutorOrderByWithAggregationInput | Prisma.AutorOrderByWithAggregationInput[];
    by: Prisma.AutorScalarFieldEnum[] | Prisma.AutorScalarFieldEnum;
    having?: Prisma.AutorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AutorCountAggregateInputType | true;
    _avg?: AutorAvgAggregateInputType;
    _sum?: AutorSumAggregateInputType;
    _min?: AutorMinAggregateInputType;
    _max?: AutorMaxAggregateInputType;
};
export type AutorGroupByOutputType = {
    id: number;
    nombre: string | null;
    area: string | null;
    tipo: string | null;
    ubicacion: string | null;
    _count: AutorCountAggregateOutputType | null;
    _avg: AutorAvgAggregateOutputType | null;
    _sum: AutorSumAggregateOutputType | null;
    _min: AutorMinAggregateOutputType | null;
    _max: AutorMaxAggregateOutputType | null;
};
export type GetAutorGroupByPayload<T extends AutorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AutorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AutorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AutorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AutorGroupByOutputType[P]>;
}>>;
export type AutorWhereInput = {
    AND?: Prisma.AutorWhereInput | Prisma.AutorWhereInput[];
    OR?: Prisma.AutorWhereInput[];
    NOT?: Prisma.AutorWhereInput | Prisma.AutorWhereInput[];
    id?: Prisma.IntFilter<"Autor"> | number;
    nombre?: Prisma.StringNullableFilter<"Autor"> | string | null;
    area?: Prisma.StringNullableFilter<"Autor"> | string | null;
    tipo?: Prisma.StringNullableFilter<"Autor"> | string | null;
    ubicacion?: Prisma.StringNullableFilter<"Autor"> | string | null;
    libros?: Prisma.LibroListRelationFilter;
};
export type AutorOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrderInput | Prisma.SortOrder;
    area?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    ubicacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    libros?: Prisma.LibroOrderByRelationAggregateInput;
};
export type AutorWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.AutorWhereInput | Prisma.AutorWhereInput[];
    OR?: Prisma.AutorWhereInput[];
    NOT?: Prisma.AutorWhereInput | Prisma.AutorWhereInput[];
    nombre?: Prisma.StringNullableFilter<"Autor"> | string | null;
    area?: Prisma.StringNullableFilter<"Autor"> | string | null;
    tipo?: Prisma.StringNullableFilter<"Autor"> | string | null;
    ubicacion?: Prisma.StringNullableFilter<"Autor"> | string | null;
    libros?: Prisma.LibroListRelationFilter;
}, "id">;
export type AutorOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrderInput | Prisma.SortOrder;
    area?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    ubicacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.AutorCountOrderByAggregateInput;
    _avg?: Prisma.AutorAvgOrderByAggregateInput;
    _max?: Prisma.AutorMaxOrderByAggregateInput;
    _min?: Prisma.AutorMinOrderByAggregateInput;
    _sum?: Prisma.AutorSumOrderByAggregateInput;
};
export type AutorScalarWhereWithAggregatesInput = {
    AND?: Prisma.AutorScalarWhereWithAggregatesInput | Prisma.AutorScalarWhereWithAggregatesInput[];
    OR?: Prisma.AutorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AutorScalarWhereWithAggregatesInput | Prisma.AutorScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Autor"> | number;
    nombre?: Prisma.StringNullableWithAggregatesFilter<"Autor"> | string | null;
    area?: Prisma.StringNullableWithAggregatesFilter<"Autor"> | string | null;
    tipo?: Prisma.StringNullableWithAggregatesFilter<"Autor"> | string | null;
    ubicacion?: Prisma.StringNullableWithAggregatesFilter<"Autor"> | string | null;
};
export type AutorCreateInput = {
    nombre?: string | null;
    area?: string | null;
    tipo?: string | null;
    ubicacion?: string | null;
    libros?: Prisma.LibroCreateNestedManyWithoutAutorRelInput;
};
export type AutorUncheckedCreateInput = {
    id?: number;
    nombre?: string | null;
    area?: string | null;
    tipo?: string | null;
    ubicacion?: string | null;
    libros?: Prisma.LibroUncheckedCreateNestedManyWithoutAutorRelInput;
};
export type AutorUpdateInput = {
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    area?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    libros?: Prisma.LibroUpdateManyWithoutAutorRelNestedInput;
};
export type AutorUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    area?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    libros?: Prisma.LibroUncheckedUpdateManyWithoutAutorRelNestedInput;
};
export type AutorCreateManyInput = {
    id?: number;
    nombre?: string | null;
    area?: string | null;
    tipo?: string | null;
    ubicacion?: string | null;
};
export type AutorUpdateManyMutationInput = {
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    area?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AutorUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    area?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AutorCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    ubicacion?: Prisma.SortOrder;
};
export type AutorAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type AutorMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    ubicacion?: Prisma.SortOrder;
};
export type AutorMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    ubicacion?: Prisma.SortOrder;
};
export type AutorSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type AutorNullableScalarRelationFilter = {
    is?: Prisma.AutorWhereInput | null;
    isNot?: Prisma.AutorWhereInput | null;
};
export type AutorCreateNestedOneWithoutLibrosInput = {
    create?: Prisma.XOR<Prisma.AutorCreateWithoutLibrosInput, Prisma.AutorUncheckedCreateWithoutLibrosInput>;
    connectOrCreate?: Prisma.AutorCreateOrConnectWithoutLibrosInput;
    connect?: Prisma.AutorWhereUniqueInput;
};
export type AutorUpdateOneWithoutLibrosNestedInput = {
    create?: Prisma.XOR<Prisma.AutorCreateWithoutLibrosInput, Prisma.AutorUncheckedCreateWithoutLibrosInput>;
    connectOrCreate?: Prisma.AutorCreateOrConnectWithoutLibrosInput;
    upsert?: Prisma.AutorUpsertWithoutLibrosInput;
    disconnect?: Prisma.AutorWhereInput | boolean;
    delete?: Prisma.AutorWhereInput | boolean;
    connect?: Prisma.AutorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AutorUpdateToOneWithWhereWithoutLibrosInput, Prisma.AutorUpdateWithoutLibrosInput>, Prisma.AutorUncheckedUpdateWithoutLibrosInput>;
};
export type AutorCreateWithoutLibrosInput = {
    nombre?: string | null;
    area?: string | null;
    tipo?: string | null;
    ubicacion?: string | null;
};
export type AutorUncheckedCreateWithoutLibrosInput = {
    id?: number;
    nombre?: string | null;
    area?: string | null;
    tipo?: string | null;
    ubicacion?: string | null;
};
export type AutorCreateOrConnectWithoutLibrosInput = {
    where: Prisma.AutorWhereUniqueInput;
    create: Prisma.XOR<Prisma.AutorCreateWithoutLibrosInput, Prisma.AutorUncheckedCreateWithoutLibrosInput>;
};
export type AutorUpsertWithoutLibrosInput = {
    update: Prisma.XOR<Prisma.AutorUpdateWithoutLibrosInput, Prisma.AutorUncheckedUpdateWithoutLibrosInput>;
    create: Prisma.XOR<Prisma.AutorCreateWithoutLibrosInput, Prisma.AutorUncheckedCreateWithoutLibrosInput>;
    where?: Prisma.AutorWhereInput;
};
export type AutorUpdateToOneWithWhereWithoutLibrosInput = {
    where?: Prisma.AutorWhereInput;
    data: Prisma.XOR<Prisma.AutorUpdateWithoutLibrosInput, Prisma.AutorUncheckedUpdateWithoutLibrosInput>;
};
export type AutorUpdateWithoutLibrosInput = {
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    area?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AutorUncheckedUpdateWithoutLibrosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    area?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AutorCountOutputType = {
    libros: number;
};
export type AutorCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    libros?: boolean | AutorCountOutputTypeCountLibrosArgs;
};
export type AutorCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AutorCountOutputTypeSelect<ExtArgs> | null;
};
export type AutorCountOutputTypeCountLibrosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LibroWhereInput;
};
export type AutorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    area?: boolean;
    tipo?: boolean;
    ubicacion?: boolean;
    libros?: boolean | Prisma.Autor$librosArgs<ExtArgs>;
    _count?: boolean | Prisma.AutorCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["autor"]>;
export type AutorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    area?: boolean;
    tipo?: boolean;
    ubicacion?: boolean;
}, ExtArgs["result"]["autor"]>;
export type AutorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    area?: boolean;
    tipo?: boolean;
    ubicacion?: boolean;
}, ExtArgs["result"]["autor"]>;
export type AutorSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    area?: boolean;
    tipo?: boolean;
    ubicacion?: boolean;
};
export type AutorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "area" | "tipo" | "ubicacion", ExtArgs["result"]["autor"]>;
export type AutorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    libros?: boolean | Prisma.Autor$librosArgs<ExtArgs>;
    _count?: boolean | Prisma.AutorCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AutorIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type AutorIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $AutorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Autor";
    objects: {
        libros: Prisma.$LibroPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string | null;
        area: string | null;
        tipo: string | null;
        ubicacion: string | null;
    }, ExtArgs["result"]["autor"]>;
    composites: {};
};
export type AutorGetPayload<S extends boolean | null | undefined | AutorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AutorPayload, S>;
export type AutorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AutorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AutorCountAggregateInputType | true;
};
export interface AutorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Autor'];
        meta: {
            name: 'Autor';
        };
    };
    findUnique<T extends AutorFindUniqueArgs>(args: Prisma.SelectSubset<T, AutorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AutorClient<runtime.Types.Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AutorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AutorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AutorClient<runtime.Types.Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AutorFindFirstArgs>(args?: Prisma.SelectSubset<T, AutorFindFirstArgs<ExtArgs>>): Prisma.Prisma__AutorClient<runtime.Types.Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AutorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AutorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AutorClient<runtime.Types.Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AutorFindManyArgs>(args?: Prisma.SelectSubset<T, AutorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AutorCreateArgs>(args: Prisma.SelectSubset<T, AutorCreateArgs<ExtArgs>>): Prisma.Prisma__AutorClient<runtime.Types.Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AutorCreateManyArgs>(args?: Prisma.SelectSubset<T, AutorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AutorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AutorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AutorDeleteArgs>(args: Prisma.SelectSubset<T, AutorDeleteArgs<ExtArgs>>): Prisma.Prisma__AutorClient<runtime.Types.Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AutorUpdateArgs>(args: Prisma.SelectSubset<T, AutorUpdateArgs<ExtArgs>>): Prisma.Prisma__AutorClient<runtime.Types.Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AutorDeleteManyArgs>(args?: Prisma.SelectSubset<T, AutorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AutorUpdateManyArgs>(args: Prisma.SelectSubset<T, AutorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AutorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AutorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AutorUpsertArgs>(args: Prisma.SelectSubset<T, AutorUpsertArgs<ExtArgs>>): Prisma.Prisma__AutorClient<runtime.Types.Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AutorCountArgs>(args?: Prisma.Subset<T, AutorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AutorCountAggregateOutputType> : number>;
    aggregate<T extends AutorAggregateArgs>(args: Prisma.Subset<T, AutorAggregateArgs>): Prisma.PrismaPromise<GetAutorAggregateType<T>>;
    groupBy<T extends AutorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AutorGroupByArgs['orderBy'];
    } : {
        orderBy?: AutorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AutorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AutorFieldRefs;
}
export interface Prisma__AutorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    libros<T extends Prisma.Autor$librosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Autor$librosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AutorFieldRefs {
    readonly id: Prisma.FieldRef<"Autor", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Autor", 'String'>;
    readonly area: Prisma.FieldRef<"Autor", 'String'>;
    readonly tipo: Prisma.FieldRef<"Autor", 'String'>;
    readonly ubicacion: Prisma.FieldRef<"Autor", 'String'>;
}
export type AutorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AutorSelect<ExtArgs> | null;
    omit?: Prisma.AutorOmit<ExtArgs> | null;
    include?: Prisma.AutorInclude<ExtArgs> | null;
    where: Prisma.AutorWhereUniqueInput;
};
export type AutorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AutorSelect<ExtArgs> | null;
    omit?: Prisma.AutorOmit<ExtArgs> | null;
    include?: Prisma.AutorInclude<ExtArgs> | null;
    where: Prisma.AutorWhereUniqueInput;
};
export type AutorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AutorSelect<ExtArgs> | null;
    omit?: Prisma.AutorOmit<ExtArgs> | null;
    include?: Prisma.AutorInclude<ExtArgs> | null;
    where?: Prisma.AutorWhereInput;
    orderBy?: Prisma.AutorOrderByWithRelationInput | Prisma.AutorOrderByWithRelationInput[];
    cursor?: Prisma.AutorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AutorScalarFieldEnum | Prisma.AutorScalarFieldEnum[];
};
export type AutorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AutorSelect<ExtArgs> | null;
    omit?: Prisma.AutorOmit<ExtArgs> | null;
    include?: Prisma.AutorInclude<ExtArgs> | null;
    where?: Prisma.AutorWhereInput;
    orderBy?: Prisma.AutorOrderByWithRelationInput | Prisma.AutorOrderByWithRelationInput[];
    cursor?: Prisma.AutorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AutorScalarFieldEnum | Prisma.AutorScalarFieldEnum[];
};
export type AutorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AutorSelect<ExtArgs> | null;
    omit?: Prisma.AutorOmit<ExtArgs> | null;
    include?: Prisma.AutorInclude<ExtArgs> | null;
    where?: Prisma.AutorWhereInput;
    orderBy?: Prisma.AutorOrderByWithRelationInput | Prisma.AutorOrderByWithRelationInput[];
    cursor?: Prisma.AutorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AutorScalarFieldEnum | Prisma.AutorScalarFieldEnum[];
};
export type AutorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AutorSelect<ExtArgs> | null;
    omit?: Prisma.AutorOmit<ExtArgs> | null;
    include?: Prisma.AutorInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.AutorCreateInput, Prisma.AutorUncheckedCreateInput>;
};
export type AutorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AutorCreateManyInput | Prisma.AutorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AutorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AutorSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AutorOmit<ExtArgs> | null;
    data: Prisma.AutorCreateManyInput | Prisma.AutorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AutorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AutorSelect<ExtArgs> | null;
    omit?: Prisma.AutorOmit<ExtArgs> | null;
    include?: Prisma.AutorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AutorUpdateInput, Prisma.AutorUncheckedUpdateInput>;
    where: Prisma.AutorWhereUniqueInput;
};
export type AutorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AutorUpdateManyMutationInput, Prisma.AutorUncheckedUpdateManyInput>;
    where?: Prisma.AutorWhereInput;
    limit?: number;
};
export type AutorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AutorSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AutorOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AutorUpdateManyMutationInput, Prisma.AutorUncheckedUpdateManyInput>;
    where?: Prisma.AutorWhereInput;
    limit?: number;
};
export type AutorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AutorSelect<ExtArgs> | null;
    omit?: Prisma.AutorOmit<ExtArgs> | null;
    include?: Prisma.AutorInclude<ExtArgs> | null;
    where: Prisma.AutorWhereUniqueInput;
    create: Prisma.XOR<Prisma.AutorCreateInput, Prisma.AutorUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AutorUpdateInput, Prisma.AutorUncheckedUpdateInput>;
};
export type AutorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AutorSelect<ExtArgs> | null;
    omit?: Prisma.AutorOmit<ExtArgs> | null;
    include?: Prisma.AutorInclude<ExtArgs> | null;
    where: Prisma.AutorWhereUniqueInput;
};
export type AutorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AutorWhereInput;
    limit?: number;
};
export type Autor$librosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroSelect<ExtArgs> | null;
    omit?: Prisma.LibroOmit<ExtArgs> | null;
    include?: Prisma.LibroInclude<ExtArgs> | null;
    where?: Prisma.LibroWhereInput;
    orderBy?: Prisma.LibroOrderByWithRelationInput | Prisma.LibroOrderByWithRelationInput[];
    cursor?: Prisma.LibroWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LibroScalarFieldEnum | Prisma.LibroScalarFieldEnum[];
};
export type AutorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AutorSelect<ExtArgs> | null;
    omit?: Prisma.AutorOmit<ExtArgs> | null;
    include?: Prisma.AutorInclude<ExtArgs> | null;
};
