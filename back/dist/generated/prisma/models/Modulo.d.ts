import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ModuloModel = runtime.Types.Result.DefaultSelection<Prisma.$ModuloPayload>;
export type AggregateModulo = {
    _count: ModuloCountAggregateOutputType | null;
    _avg: ModuloAvgAggregateOutputType | null;
    _sum: ModuloSumAggregateOutputType | null;
    _min: ModuloMinAggregateOutputType | null;
    _max: ModuloMaxAggregateOutputType | null;
};
export type ModuloAvgAggregateOutputType = {
    idModulo: number | null;
};
export type ModuloSumAggregateOutputType = {
    idModulo: number | null;
};
export type ModuloMinAggregateOutputType = {
    idModulo: number | null;
    tituloModulo: string | null;
    numeroModulo: string | null;
};
export type ModuloMaxAggregateOutputType = {
    idModulo: number | null;
    tituloModulo: string | null;
    numeroModulo: string | null;
};
export type ModuloCountAggregateOutputType = {
    idModulo: number;
    tituloModulo: number;
    numeroModulo: number;
    _all: number;
};
export type ModuloAvgAggregateInputType = {
    idModulo?: true;
};
export type ModuloSumAggregateInputType = {
    idModulo?: true;
};
export type ModuloMinAggregateInputType = {
    idModulo?: true;
    tituloModulo?: true;
    numeroModulo?: true;
};
export type ModuloMaxAggregateInputType = {
    idModulo?: true;
    tituloModulo?: true;
    numeroModulo?: true;
};
export type ModuloCountAggregateInputType = {
    idModulo?: true;
    tituloModulo?: true;
    numeroModulo?: true;
    _all?: true;
};
export type ModuloAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModuloWhereInput;
    orderBy?: Prisma.ModuloOrderByWithRelationInput | Prisma.ModuloOrderByWithRelationInput[];
    cursor?: Prisma.ModuloWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ModuloCountAggregateInputType;
    _avg?: ModuloAvgAggregateInputType;
    _sum?: ModuloSumAggregateInputType;
    _min?: ModuloMinAggregateInputType;
    _max?: ModuloMaxAggregateInputType;
};
export type GetModuloAggregateType<T extends ModuloAggregateArgs> = {
    [P in keyof T & keyof AggregateModulo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateModulo[P]> : Prisma.GetScalarType<T[P], AggregateModulo[P]>;
};
export type ModuloGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModuloWhereInput;
    orderBy?: Prisma.ModuloOrderByWithAggregationInput | Prisma.ModuloOrderByWithAggregationInput[];
    by: Prisma.ModuloScalarFieldEnum[] | Prisma.ModuloScalarFieldEnum;
    having?: Prisma.ModuloScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ModuloCountAggregateInputType | true;
    _avg?: ModuloAvgAggregateInputType;
    _sum?: ModuloSumAggregateInputType;
    _min?: ModuloMinAggregateInputType;
    _max?: ModuloMaxAggregateInputType;
};
export type ModuloGroupByOutputType = {
    idModulo: number;
    tituloModulo: string;
    numeroModulo: string;
    _count: ModuloCountAggregateOutputType | null;
    _avg: ModuloAvgAggregateOutputType | null;
    _sum: ModuloSumAggregateOutputType | null;
    _min: ModuloMinAggregateOutputType | null;
    _max: ModuloMaxAggregateOutputType | null;
};
export type GetModuloGroupByPayload<T extends ModuloGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ModuloGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ModuloGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ModuloGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ModuloGroupByOutputType[P]>;
}>>;
export type ModuloWhereInput = {
    AND?: Prisma.ModuloWhereInput | Prisma.ModuloWhereInput[];
    OR?: Prisma.ModuloWhereInput[];
    NOT?: Prisma.ModuloWhereInput | Prisma.ModuloWhereInput[];
    idModulo?: Prisma.IntFilter<"Modulo"> | number;
    tituloModulo?: Prisma.StringFilter<"Modulo"> | string;
    numeroModulo?: Prisma.StringFilter<"Modulo"> | string;
    organiza?: Prisma.OrganizaPosgradoListRelationFilter;
    incluye?: Prisma.XOR<Prisma.IncluyePosgradoNullableScalarRelationFilter, Prisma.IncluyePosgradoWhereInput> | null;
};
export type ModuloOrderByWithRelationInput = {
    idModulo?: Prisma.SortOrder;
    tituloModulo?: Prisma.SortOrder;
    numeroModulo?: Prisma.SortOrder;
    organiza?: Prisma.OrganizaPosgradoOrderByRelationAggregateInput;
    incluye?: Prisma.IncluyePosgradoOrderByWithRelationInput;
};
export type ModuloWhereUniqueInput = Prisma.AtLeast<{
    idModulo?: number;
    AND?: Prisma.ModuloWhereInput | Prisma.ModuloWhereInput[];
    OR?: Prisma.ModuloWhereInput[];
    NOT?: Prisma.ModuloWhereInput | Prisma.ModuloWhereInput[];
    tituloModulo?: Prisma.StringFilter<"Modulo"> | string;
    numeroModulo?: Prisma.StringFilter<"Modulo"> | string;
    organiza?: Prisma.OrganizaPosgradoListRelationFilter;
    incluye?: Prisma.XOR<Prisma.IncluyePosgradoNullableScalarRelationFilter, Prisma.IncluyePosgradoWhereInput> | null;
}, "idModulo">;
export type ModuloOrderByWithAggregationInput = {
    idModulo?: Prisma.SortOrder;
    tituloModulo?: Prisma.SortOrder;
    numeroModulo?: Prisma.SortOrder;
    _count?: Prisma.ModuloCountOrderByAggregateInput;
    _avg?: Prisma.ModuloAvgOrderByAggregateInput;
    _max?: Prisma.ModuloMaxOrderByAggregateInput;
    _min?: Prisma.ModuloMinOrderByAggregateInput;
    _sum?: Prisma.ModuloSumOrderByAggregateInput;
};
export type ModuloScalarWhereWithAggregatesInput = {
    AND?: Prisma.ModuloScalarWhereWithAggregatesInput | Prisma.ModuloScalarWhereWithAggregatesInput[];
    OR?: Prisma.ModuloScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ModuloScalarWhereWithAggregatesInput | Prisma.ModuloScalarWhereWithAggregatesInput[];
    idModulo?: Prisma.IntWithAggregatesFilter<"Modulo"> | number;
    tituloModulo?: Prisma.StringWithAggregatesFilter<"Modulo"> | string;
    numeroModulo?: Prisma.StringWithAggregatesFilter<"Modulo"> | string;
};
export type ModuloCreateInput = {
    tituloModulo: string;
    numeroModulo: string;
    organiza?: Prisma.OrganizaPosgradoCreateNestedManyWithoutModuloInput;
    incluye?: Prisma.IncluyePosgradoCreateNestedOneWithoutModuloInput;
};
export type ModuloUncheckedCreateInput = {
    idModulo?: number;
    tituloModulo: string;
    numeroModulo: string;
    organiza?: Prisma.OrganizaPosgradoUncheckedCreateNestedManyWithoutModuloInput;
    incluye?: Prisma.IncluyePosgradoUncheckedCreateNestedOneWithoutModuloInput;
};
export type ModuloUpdateInput = {
    tituloModulo?: Prisma.StringFieldUpdateOperationsInput | string;
    numeroModulo?: Prisma.StringFieldUpdateOperationsInput | string;
    organiza?: Prisma.OrganizaPosgradoUpdateManyWithoutModuloNestedInput;
    incluye?: Prisma.IncluyePosgradoUpdateOneWithoutModuloNestedInput;
};
export type ModuloUncheckedUpdateInput = {
    idModulo?: Prisma.IntFieldUpdateOperationsInput | number;
    tituloModulo?: Prisma.StringFieldUpdateOperationsInput | string;
    numeroModulo?: Prisma.StringFieldUpdateOperationsInput | string;
    organiza?: Prisma.OrganizaPosgradoUncheckedUpdateManyWithoutModuloNestedInput;
    incluye?: Prisma.IncluyePosgradoUncheckedUpdateOneWithoutModuloNestedInput;
};
export type ModuloCreateManyInput = {
    idModulo?: number;
    tituloModulo: string;
    numeroModulo: string;
};
export type ModuloUpdateManyMutationInput = {
    tituloModulo?: Prisma.StringFieldUpdateOperationsInput | string;
    numeroModulo?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ModuloUncheckedUpdateManyInput = {
    idModulo?: Prisma.IntFieldUpdateOperationsInput | number;
    tituloModulo?: Prisma.StringFieldUpdateOperationsInput | string;
    numeroModulo?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ModuloCountOrderByAggregateInput = {
    idModulo?: Prisma.SortOrder;
    tituloModulo?: Prisma.SortOrder;
    numeroModulo?: Prisma.SortOrder;
};
export type ModuloAvgOrderByAggregateInput = {
    idModulo?: Prisma.SortOrder;
};
export type ModuloMaxOrderByAggregateInput = {
    idModulo?: Prisma.SortOrder;
    tituloModulo?: Prisma.SortOrder;
    numeroModulo?: Prisma.SortOrder;
};
export type ModuloMinOrderByAggregateInput = {
    idModulo?: Prisma.SortOrder;
    tituloModulo?: Prisma.SortOrder;
    numeroModulo?: Prisma.SortOrder;
};
export type ModuloSumOrderByAggregateInput = {
    idModulo?: Prisma.SortOrder;
};
export type ModuloScalarRelationFilter = {
    is?: Prisma.ModuloWhereInput;
    isNot?: Prisma.ModuloWhereInput;
};
export type ModuloCreateNestedOneWithoutOrganizaInput = {
    create?: Prisma.XOR<Prisma.ModuloCreateWithoutOrganizaInput, Prisma.ModuloUncheckedCreateWithoutOrganizaInput>;
    connectOrCreate?: Prisma.ModuloCreateOrConnectWithoutOrganizaInput;
    connect?: Prisma.ModuloWhereUniqueInput;
};
export type ModuloUpdateOneRequiredWithoutOrganizaNestedInput = {
    create?: Prisma.XOR<Prisma.ModuloCreateWithoutOrganizaInput, Prisma.ModuloUncheckedCreateWithoutOrganizaInput>;
    connectOrCreate?: Prisma.ModuloCreateOrConnectWithoutOrganizaInput;
    upsert?: Prisma.ModuloUpsertWithoutOrganizaInput;
    connect?: Prisma.ModuloWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ModuloUpdateToOneWithWhereWithoutOrganizaInput, Prisma.ModuloUpdateWithoutOrganizaInput>, Prisma.ModuloUncheckedUpdateWithoutOrganizaInput>;
};
export type ModuloCreateNestedOneWithoutIncluyeInput = {
    create?: Prisma.XOR<Prisma.ModuloCreateWithoutIncluyeInput, Prisma.ModuloUncheckedCreateWithoutIncluyeInput>;
    connectOrCreate?: Prisma.ModuloCreateOrConnectWithoutIncluyeInput;
    connect?: Prisma.ModuloWhereUniqueInput;
};
export type ModuloUpdateOneRequiredWithoutIncluyeNestedInput = {
    create?: Prisma.XOR<Prisma.ModuloCreateWithoutIncluyeInput, Prisma.ModuloUncheckedCreateWithoutIncluyeInput>;
    connectOrCreate?: Prisma.ModuloCreateOrConnectWithoutIncluyeInput;
    upsert?: Prisma.ModuloUpsertWithoutIncluyeInput;
    connect?: Prisma.ModuloWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ModuloUpdateToOneWithWhereWithoutIncluyeInput, Prisma.ModuloUpdateWithoutIncluyeInput>, Prisma.ModuloUncheckedUpdateWithoutIncluyeInput>;
};
export type ModuloCreateWithoutOrganizaInput = {
    tituloModulo: string;
    numeroModulo: string;
    incluye?: Prisma.IncluyePosgradoCreateNestedOneWithoutModuloInput;
};
export type ModuloUncheckedCreateWithoutOrganizaInput = {
    idModulo?: number;
    tituloModulo: string;
    numeroModulo: string;
    incluye?: Prisma.IncluyePosgradoUncheckedCreateNestedOneWithoutModuloInput;
};
export type ModuloCreateOrConnectWithoutOrganizaInput = {
    where: Prisma.ModuloWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModuloCreateWithoutOrganizaInput, Prisma.ModuloUncheckedCreateWithoutOrganizaInput>;
};
export type ModuloUpsertWithoutOrganizaInput = {
    update: Prisma.XOR<Prisma.ModuloUpdateWithoutOrganizaInput, Prisma.ModuloUncheckedUpdateWithoutOrganizaInput>;
    create: Prisma.XOR<Prisma.ModuloCreateWithoutOrganizaInput, Prisma.ModuloUncheckedCreateWithoutOrganizaInput>;
    where?: Prisma.ModuloWhereInput;
};
export type ModuloUpdateToOneWithWhereWithoutOrganizaInput = {
    where?: Prisma.ModuloWhereInput;
    data: Prisma.XOR<Prisma.ModuloUpdateWithoutOrganizaInput, Prisma.ModuloUncheckedUpdateWithoutOrganizaInput>;
};
export type ModuloUpdateWithoutOrganizaInput = {
    tituloModulo?: Prisma.StringFieldUpdateOperationsInput | string;
    numeroModulo?: Prisma.StringFieldUpdateOperationsInput | string;
    incluye?: Prisma.IncluyePosgradoUpdateOneWithoutModuloNestedInput;
};
export type ModuloUncheckedUpdateWithoutOrganizaInput = {
    idModulo?: Prisma.IntFieldUpdateOperationsInput | number;
    tituloModulo?: Prisma.StringFieldUpdateOperationsInput | string;
    numeroModulo?: Prisma.StringFieldUpdateOperationsInput | string;
    incluye?: Prisma.IncluyePosgradoUncheckedUpdateOneWithoutModuloNestedInput;
};
export type ModuloCreateWithoutIncluyeInput = {
    tituloModulo: string;
    numeroModulo: string;
    organiza?: Prisma.OrganizaPosgradoCreateNestedManyWithoutModuloInput;
};
export type ModuloUncheckedCreateWithoutIncluyeInput = {
    idModulo?: number;
    tituloModulo: string;
    numeroModulo: string;
    organiza?: Prisma.OrganizaPosgradoUncheckedCreateNestedManyWithoutModuloInput;
};
export type ModuloCreateOrConnectWithoutIncluyeInput = {
    where: Prisma.ModuloWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModuloCreateWithoutIncluyeInput, Prisma.ModuloUncheckedCreateWithoutIncluyeInput>;
};
export type ModuloUpsertWithoutIncluyeInput = {
    update: Prisma.XOR<Prisma.ModuloUpdateWithoutIncluyeInput, Prisma.ModuloUncheckedUpdateWithoutIncluyeInput>;
    create: Prisma.XOR<Prisma.ModuloCreateWithoutIncluyeInput, Prisma.ModuloUncheckedCreateWithoutIncluyeInput>;
    where?: Prisma.ModuloWhereInput;
};
export type ModuloUpdateToOneWithWhereWithoutIncluyeInput = {
    where?: Prisma.ModuloWhereInput;
    data: Prisma.XOR<Prisma.ModuloUpdateWithoutIncluyeInput, Prisma.ModuloUncheckedUpdateWithoutIncluyeInput>;
};
export type ModuloUpdateWithoutIncluyeInput = {
    tituloModulo?: Prisma.StringFieldUpdateOperationsInput | string;
    numeroModulo?: Prisma.StringFieldUpdateOperationsInput | string;
    organiza?: Prisma.OrganizaPosgradoUpdateManyWithoutModuloNestedInput;
};
export type ModuloUncheckedUpdateWithoutIncluyeInput = {
    idModulo?: Prisma.IntFieldUpdateOperationsInput | number;
    tituloModulo?: Prisma.StringFieldUpdateOperationsInput | string;
    numeroModulo?: Prisma.StringFieldUpdateOperationsInput | string;
    organiza?: Prisma.OrganizaPosgradoUncheckedUpdateManyWithoutModuloNestedInput;
};
export type ModuloCountOutputType = {
    organiza: number;
};
export type ModuloCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organiza?: boolean | ModuloCountOutputTypeCountOrganizaArgs;
};
export type ModuloCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuloCountOutputTypeSelect<ExtArgs> | null;
};
export type ModuloCountOutputTypeCountOrganizaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizaPosgradoWhereInput;
};
export type ModuloSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idModulo?: boolean;
    tituloModulo?: boolean;
    numeroModulo?: boolean;
    organiza?: boolean | Prisma.Modulo$organizaArgs<ExtArgs>;
    incluye?: boolean | Prisma.Modulo$incluyeArgs<ExtArgs>;
    _count?: boolean | Prisma.ModuloCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["modulo"]>;
export type ModuloSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idModulo?: boolean;
    tituloModulo?: boolean;
    numeroModulo?: boolean;
}, ExtArgs["result"]["modulo"]>;
export type ModuloSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idModulo?: boolean;
    tituloModulo?: boolean;
    numeroModulo?: boolean;
}, ExtArgs["result"]["modulo"]>;
export type ModuloSelectScalar = {
    idModulo?: boolean;
    tituloModulo?: boolean;
    numeroModulo?: boolean;
};
export type ModuloOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"idModulo" | "tituloModulo" | "numeroModulo", ExtArgs["result"]["modulo"]>;
export type ModuloInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organiza?: boolean | Prisma.Modulo$organizaArgs<ExtArgs>;
    incluye?: boolean | Prisma.Modulo$incluyeArgs<ExtArgs>;
    _count?: boolean | Prisma.ModuloCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ModuloIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ModuloIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ModuloPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Modulo";
    objects: {
        organiza: Prisma.$OrganizaPosgradoPayload<ExtArgs>[];
        incluye: Prisma.$IncluyePosgradoPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        idModulo: number;
        tituloModulo: string;
        numeroModulo: string;
    }, ExtArgs["result"]["modulo"]>;
    composites: {};
};
export type ModuloGetPayload<S extends boolean | null | undefined | ModuloDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ModuloPayload, S>;
export type ModuloCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ModuloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ModuloCountAggregateInputType | true;
};
export interface ModuloDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Modulo'];
        meta: {
            name: 'Modulo';
        };
    };
    findUnique<T extends ModuloFindUniqueArgs>(args: Prisma.SelectSubset<T, ModuloFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ModuloClient<runtime.Types.Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ModuloFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ModuloFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ModuloClient<runtime.Types.Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ModuloFindFirstArgs>(args?: Prisma.SelectSubset<T, ModuloFindFirstArgs<ExtArgs>>): Prisma.Prisma__ModuloClient<runtime.Types.Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ModuloFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ModuloFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ModuloClient<runtime.Types.Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ModuloFindManyArgs>(args?: Prisma.SelectSubset<T, ModuloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ModuloCreateArgs>(args: Prisma.SelectSubset<T, ModuloCreateArgs<ExtArgs>>): Prisma.Prisma__ModuloClient<runtime.Types.Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ModuloCreateManyArgs>(args?: Prisma.SelectSubset<T, ModuloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ModuloCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ModuloCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ModuloDeleteArgs>(args: Prisma.SelectSubset<T, ModuloDeleteArgs<ExtArgs>>): Prisma.Prisma__ModuloClient<runtime.Types.Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ModuloUpdateArgs>(args: Prisma.SelectSubset<T, ModuloUpdateArgs<ExtArgs>>): Prisma.Prisma__ModuloClient<runtime.Types.Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ModuloDeleteManyArgs>(args?: Prisma.SelectSubset<T, ModuloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ModuloUpdateManyArgs>(args: Prisma.SelectSubset<T, ModuloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ModuloUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ModuloUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ModuloUpsertArgs>(args: Prisma.SelectSubset<T, ModuloUpsertArgs<ExtArgs>>): Prisma.Prisma__ModuloClient<runtime.Types.Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ModuloCountArgs>(args?: Prisma.Subset<T, ModuloCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ModuloCountAggregateOutputType> : number>;
    aggregate<T extends ModuloAggregateArgs>(args: Prisma.Subset<T, ModuloAggregateArgs>): Prisma.PrismaPromise<GetModuloAggregateType<T>>;
    groupBy<T extends ModuloGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ModuloGroupByArgs['orderBy'];
    } : {
        orderBy?: ModuloGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ModuloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ModuloFieldRefs;
}
export interface Prisma__ModuloClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organiza<T extends Prisma.Modulo$organizaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Modulo$organizaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizaPosgradoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    incluye<T extends Prisma.Modulo$incluyeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Modulo$incluyeArgs<ExtArgs>>): Prisma.Prisma__IncluyePosgradoClient<runtime.Types.Result.GetResult<Prisma.$IncluyePosgradoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ModuloFieldRefs {
    readonly idModulo: Prisma.FieldRef<"Modulo", 'Int'>;
    readonly tituloModulo: Prisma.FieldRef<"Modulo", 'String'>;
    readonly numeroModulo: Prisma.FieldRef<"Modulo", 'String'>;
}
export type ModuloFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuloSelect<ExtArgs> | null;
    omit?: Prisma.ModuloOmit<ExtArgs> | null;
    include?: Prisma.ModuloInclude<ExtArgs> | null;
    where: Prisma.ModuloWhereUniqueInput;
};
export type ModuloFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuloSelect<ExtArgs> | null;
    omit?: Prisma.ModuloOmit<ExtArgs> | null;
    include?: Prisma.ModuloInclude<ExtArgs> | null;
    where: Prisma.ModuloWhereUniqueInput;
};
export type ModuloFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuloSelect<ExtArgs> | null;
    omit?: Prisma.ModuloOmit<ExtArgs> | null;
    include?: Prisma.ModuloInclude<ExtArgs> | null;
    where?: Prisma.ModuloWhereInput;
    orderBy?: Prisma.ModuloOrderByWithRelationInput | Prisma.ModuloOrderByWithRelationInput[];
    cursor?: Prisma.ModuloWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ModuloScalarFieldEnum | Prisma.ModuloScalarFieldEnum[];
};
export type ModuloFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuloSelect<ExtArgs> | null;
    omit?: Prisma.ModuloOmit<ExtArgs> | null;
    include?: Prisma.ModuloInclude<ExtArgs> | null;
    where?: Prisma.ModuloWhereInput;
    orderBy?: Prisma.ModuloOrderByWithRelationInput | Prisma.ModuloOrderByWithRelationInput[];
    cursor?: Prisma.ModuloWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ModuloScalarFieldEnum | Prisma.ModuloScalarFieldEnum[];
};
export type ModuloFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuloSelect<ExtArgs> | null;
    omit?: Prisma.ModuloOmit<ExtArgs> | null;
    include?: Prisma.ModuloInclude<ExtArgs> | null;
    where?: Prisma.ModuloWhereInput;
    orderBy?: Prisma.ModuloOrderByWithRelationInput | Prisma.ModuloOrderByWithRelationInput[];
    cursor?: Prisma.ModuloWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ModuloScalarFieldEnum | Prisma.ModuloScalarFieldEnum[];
};
export type ModuloCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuloSelect<ExtArgs> | null;
    omit?: Prisma.ModuloOmit<ExtArgs> | null;
    include?: Prisma.ModuloInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ModuloCreateInput, Prisma.ModuloUncheckedCreateInput>;
};
export type ModuloCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ModuloCreateManyInput | Prisma.ModuloCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ModuloCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuloSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ModuloOmit<ExtArgs> | null;
    data: Prisma.ModuloCreateManyInput | Prisma.ModuloCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ModuloUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuloSelect<ExtArgs> | null;
    omit?: Prisma.ModuloOmit<ExtArgs> | null;
    include?: Prisma.ModuloInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ModuloUpdateInput, Prisma.ModuloUncheckedUpdateInput>;
    where: Prisma.ModuloWhereUniqueInput;
};
export type ModuloUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ModuloUpdateManyMutationInput, Prisma.ModuloUncheckedUpdateManyInput>;
    where?: Prisma.ModuloWhereInput;
    limit?: number;
};
export type ModuloUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuloSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ModuloOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ModuloUpdateManyMutationInput, Prisma.ModuloUncheckedUpdateManyInput>;
    where?: Prisma.ModuloWhereInput;
    limit?: number;
};
export type ModuloUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuloSelect<ExtArgs> | null;
    omit?: Prisma.ModuloOmit<ExtArgs> | null;
    include?: Prisma.ModuloInclude<ExtArgs> | null;
    where: Prisma.ModuloWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModuloCreateInput, Prisma.ModuloUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ModuloUpdateInput, Prisma.ModuloUncheckedUpdateInput>;
};
export type ModuloDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuloSelect<ExtArgs> | null;
    omit?: Prisma.ModuloOmit<ExtArgs> | null;
    include?: Prisma.ModuloInclude<ExtArgs> | null;
    where: Prisma.ModuloWhereUniqueInput;
};
export type ModuloDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModuloWhereInput;
    limit?: number;
};
export type Modulo$organizaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizaPosgradoSelect<ExtArgs> | null;
    omit?: Prisma.OrganizaPosgradoOmit<ExtArgs> | null;
    include?: Prisma.OrganizaPosgradoInclude<ExtArgs> | null;
    where?: Prisma.OrganizaPosgradoWhereInput;
    orderBy?: Prisma.OrganizaPosgradoOrderByWithRelationInput | Prisma.OrganizaPosgradoOrderByWithRelationInput[];
    cursor?: Prisma.OrganizaPosgradoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizaPosgradoScalarFieldEnum | Prisma.OrganizaPosgradoScalarFieldEnum[];
};
export type Modulo$incluyeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncluyePosgradoSelect<ExtArgs> | null;
    omit?: Prisma.IncluyePosgradoOmit<ExtArgs> | null;
    include?: Prisma.IncluyePosgradoInclude<ExtArgs> | null;
    where?: Prisma.IncluyePosgradoWhereInput;
};
export type ModuloDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuloSelect<ExtArgs> | null;
    omit?: Prisma.ModuloOmit<ExtArgs> | null;
    include?: Prisma.ModuloInclude<ExtArgs> | null;
};
