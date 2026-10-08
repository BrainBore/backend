import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ProgramaModel = runtime.Types.Result.DefaultSelection<Prisma.$ProgramaPayload>;
export type AggregatePrograma = {
    _count: ProgramaCountAggregateOutputType | null;
    _avg: ProgramaAvgAggregateOutputType | null;
    _sum: ProgramaSumAggregateOutputType | null;
    _min: ProgramaMinAggregateOutputType | null;
    _max: ProgramaMaxAggregateOutputType | null;
};
export type ProgramaAvgAggregateOutputType = {
    idPrograma: number | null;
};
export type ProgramaSumAggregateOutputType = {
    idPrograma: number | null;
};
export type ProgramaMinAggregateOutputType = {
    idPrograma: number | null;
    nombre: string | null;
    tipo: string | null;
    costo: string | null;
};
export type ProgramaMaxAggregateOutputType = {
    idPrograma: number | null;
    nombre: string | null;
    tipo: string | null;
    costo: string | null;
};
export type ProgramaCountAggregateOutputType = {
    idPrograma: number;
    nombre: number;
    tipo: number;
    costo: number;
    _all: number;
};
export type ProgramaAvgAggregateInputType = {
    idPrograma?: true;
};
export type ProgramaSumAggregateInputType = {
    idPrograma?: true;
};
export type ProgramaMinAggregateInputType = {
    idPrograma?: true;
    nombre?: true;
    tipo?: true;
    costo?: true;
};
export type ProgramaMaxAggregateInputType = {
    idPrograma?: true;
    nombre?: true;
    tipo?: true;
    costo?: true;
};
export type ProgramaCountAggregateInputType = {
    idPrograma?: true;
    nombre?: true;
    tipo?: true;
    costo?: true;
    _all?: true;
};
export type ProgramaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgramaWhereInput;
    orderBy?: Prisma.ProgramaOrderByWithRelationInput | Prisma.ProgramaOrderByWithRelationInput[];
    cursor?: Prisma.ProgramaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProgramaCountAggregateInputType;
    _avg?: ProgramaAvgAggregateInputType;
    _sum?: ProgramaSumAggregateInputType;
    _min?: ProgramaMinAggregateInputType;
    _max?: ProgramaMaxAggregateInputType;
};
export type GetProgramaAggregateType<T extends ProgramaAggregateArgs> = {
    [P in keyof T & keyof AggregatePrograma]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePrograma[P]> : Prisma.GetScalarType<T[P], AggregatePrograma[P]>;
};
export type ProgramaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgramaWhereInput;
    orderBy?: Prisma.ProgramaOrderByWithAggregationInput | Prisma.ProgramaOrderByWithAggregationInput[];
    by: Prisma.ProgramaScalarFieldEnum[] | Prisma.ProgramaScalarFieldEnum;
    having?: Prisma.ProgramaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProgramaCountAggregateInputType | true;
    _avg?: ProgramaAvgAggregateInputType;
    _sum?: ProgramaSumAggregateInputType;
    _min?: ProgramaMinAggregateInputType;
    _max?: ProgramaMaxAggregateInputType;
};
export type ProgramaGroupByOutputType = {
    idPrograma: number;
    nombre: string;
    tipo: string;
    costo: string;
    _count: ProgramaCountAggregateOutputType | null;
    _avg: ProgramaAvgAggregateOutputType | null;
    _sum: ProgramaSumAggregateOutputType | null;
    _min: ProgramaMinAggregateOutputType | null;
    _max: ProgramaMaxAggregateOutputType | null;
};
export type GetProgramaGroupByPayload<T extends ProgramaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProgramaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProgramaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProgramaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProgramaGroupByOutputType[P]>;
}>>;
export type ProgramaWhereInput = {
    AND?: Prisma.ProgramaWhereInput | Prisma.ProgramaWhereInput[];
    OR?: Prisma.ProgramaWhereInput[];
    NOT?: Prisma.ProgramaWhereInput | Prisma.ProgramaWhereInput[];
    idPrograma?: Prisma.IntFilter<"Programa"> | number;
    nombre?: Prisma.StringFilter<"Programa"> | string;
    tipo?: Prisma.StringFilter<"Programa"> | string;
    costo?: Prisma.StringFilter<"Programa"> | string;
    organiza?: Prisma.OrganizaPosgradoListRelationFilter;
};
export type ProgramaOrderByWithRelationInput = {
    idPrograma?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    costo?: Prisma.SortOrder;
    organiza?: Prisma.OrganizaPosgradoOrderByRelationAggregateInput;
};
export type ProgramaWhereUniqueInput = Prisma.AtLeast<{
    idPrograma?: number;
    AND?: Prisma.ProgramaWhereInput | Prisma.ProgramaWhereInput[];
    OR?: Prisma.ProgramaWhereInput[];
    NOT?: Prisma.ProgramaWhereInput | Prisma.ProgramaWhereInput[];
    nombre?: Prisma.StringFilter<"Programa"> | string;
    tipo?: Prisma.StringFilter<"Programa"> | string;
    costo?: Prisma.StringFilter<"Programa"> | string;
    organiza?: Prisma.OrganizaPosgradoListRelationFilter;
}, "idPrograma">;
export type ProgramaOrderByWithAggregationInput = {
    idPrograma?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    costo?: Prisma.SortOrder;
    _count?: Prisma.ProgramaCountOrderByAggregateInput;
    _avg?: Prisma.ProgramaAvgOrderByAggregateInput;
    _max?: Prisma.ProgramaMaxOrderByAggregateInput;
    _min?: Prisma.ProgramaMinOrderByAggregateInput;
    _sum?: Prisma.ProgramaSumOrderByAggregateInput;
};
export type ProgramaScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProgramaScalarWhereWithAggregatesInput | Prisma.ProgramaScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProgramaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProgramaScalarWhereWithAggregatesInput | Prisma.ProgramaScalarWhereWithAggregatesInput[];
    idPrograma?: Prisma.IntWithAggregatesFilter<"Programa"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Programa"> | string;
    tipo?: Prisma.StringWithAggregatesFilter<"Programa"> | string;
    costo?: Prisma.StringWithAggregatesFilter<"Programa"> | string;
};
export type ProgramaCreateInput = {
    nombre: string;
    tipo: string;
    costo: string;
    organiza?: Prisma.OrganizaPosgradoCreateNestedManyWithoutProgramaInput;
};
export type ProgramaUncheckedCreateInput = {
    idPrograma?: number;
    nombre: string;
    tipo: string;
    costo: string;
    organiza?: Prisma.OrganizaPosgradoUncheckedCreateNestedManyWithoutProgramaInput;
};
export type ProgramaUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    costo?: Prisma.StringFieldUpdateOperationsInput | string;
    organiza?: Prisma.OrganizaPosgradoUpdateManyWithoutProgramaNestedInput;
};
export type ProgramaUncheckedUpdateInput = {
    idPrograma?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    costo?: Prisma.StringFieldUpdateOperationsInput | string;
    organiza?: Prisma.OrganizaPosgradoUncheckedUpdateManyWithoutProgramaNestedInput;
};
export type ProgramaCreateManyInput = {
    idPrograma?: number;
    nombre: string;
    tipo: string;
    costo: string;
};
export type ProgramaUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    costo?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProgramaUncheckedUpdateManyInput = {
    idPrograma?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    costo?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProgramaCountOrderByAggregateInput = {
    idPrograma?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    costo?: Prisma.SortOrder;
};
export type ProgramaAvgOrderByAggregateInput = {
    idPrograma?: Prisma.SortOrder;
};
export type ProgramaMaxOrderByAggregateInput = {
    idPrograma?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    costo?: Prisma.SortOrder;
};
export type ProgramaMinOrderByAggregateInput = {
    idPrograma?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    costo?: Prisma.SortOrder;
};
export type ProgramaSumOrderByAggregateInput = {
    idPrograma?: Prisma.SortOrder;
};
export type ProgramaScalarRelationFilter = {
    is?: Prisma.ProgramaWhereInput;
    isNot?: Prisma.ProgramaWhereInput;
};
export type ProgramaCreateNestedOneWithoutOrganizaInput = {
    create?: Prisma.XOR<Prisma.ProgramaCreateWithoutOrganizaInput, Prisma.ProgramaUncheckedCreateWithoutOrganizaInput>;
    connectOrCreate?: Prisma.ProgramaCreateOrConnectWithoutOrganizaInput;
    connect?: Prisma.ProgramaWhereUniqueInput;
};
export type ProgramaUpdateOneRequiredWithoutOrganizaNestedInput = {
    create?: Prisma.XOR<Prisma.ProgramaCreateWithoutOrganizaInput, Prisma.ProgramaUncheckedCreateWithoutOrganizaInput>;
    connectOrCreate?: Prisma.ProgramaCreateOrConnectWithoutOrganizaInput;
    upsert?: Prisma.ProgramaUpsertWithoutOrganizaInput;
    connect?: Prisma.ProgramaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProgramaUpdateToOneWithWhereWithoutOrganizaInput, Prisma.ProgramaUpdateWithoutOrganizaInput>, Prisma.ProgramaUncheckedUpdateWithoutOrganizaInput>;
};
export type ProgramaCreateWithoutOrganizaInput = {
    nombre: string;
    tipo: string;
    costo: string;
};
export type ProgramaUncheckedCreateWithoutOrganizaInput = {
    idPrograma?: number;
    nombre: string;
    tipo: string;
    costo: string;
};
export type ProgramaCreateOrConnectWithoutOrganizaInput = {
    where: Prisma.ProgramaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgramaCreateWithoutOrganizaInput, Prisma.ProgramaUncheckedCreateWithoutOrganizaInput>;
};
export type ProgramaUpsertWithoutOrganizaInput = {
    update: Prisma.XOR<Prisma.ProgramaUpdateWithoutOrganizaInput, Prisma.ProgramaUncheckedUpdateWithoutOrganizaInput>;
    create: Prisma.XOR<Prisma.ProgramaCreateWithoutOrganizaInput, Prisma.ProgramaUncheckedCreateWithoutOrganizaInput>;
    where?: Prisma.ProgramaWhereInput;
};
export type ProgramaUpdateToOneWithWhereWithoutOrganizaInput = {
    where?: Prisma.ProgramaWhereInput;
    data: Prisma.XOR<Prisma.ProgramaUpdateWithoutOrganizaInput, Prisma.ProgramaUncheckedUpdateWithoutOrganizaInput>;
};
export type ProgramaUpdateWithoutOrganizaInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    costo?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProgramaUncheckedUpdateWithoutOrganizaInput = {
    idPrograma?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    costo?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProgramaCountOutputType = {
    organiza: number;
};
export type ProgramaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organiza?: boolean | ProgramaCountOutputTypeCountOrganizaArgs;
};
export type ProgramaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramaCountOutputTypeSelect<ExtArgs> | null;
};
export type ProgramaCountOutputTypeCountOrganizaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizaPosgradoWhereInput;
};
export type ProgramaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idPrograma?: boolean;
    nombre?: boolean;
    tipo?: boolean;
    costo?: boolean;
    organiza?: boolean | Prisma.Programa$organizaArgs<ExtArgs>;
    _count?: boolean | Prisma.ProgramaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["programa"]>;
export type ProgramaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idPrograma?: boolean;
    nombre?: boolean;
    tipo?: boolean;
    costo?: boolean;
}, ExtArgs["result"]["programa"]>;
export type ProgramaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idPrograma?: boolean;
    nombre?: boolean;
    tipo?: boolean;
    costo?: boolean;
}, ExtArgs["result"]["programa"]>;
export type ProgramaSelectScalar = {
    idPrograma?: boolean;
    nombre?: boolean;
    tipo?: boolean;
    costo?: boolean;
};
export type ProgramaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"idPrograma" | "nombre" | "tipo" | "costo", ExtArgs["result"]["programa"]>;
export type ProgramaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organiza?: boolean | Prisma.Programa$organizaArgs<ExtArgs>;
    _count?: boolean | Prisma.ProgramaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProgramaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ProgramaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ProgramaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Programa";
    objects: {
        organiza: Prisma.$OrganizaPosgradoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        idPrograma: number;
        nombre: string;
        tipo: string;
        costo: string;
    }, ExtArgs["result"]["programa"]>;
    composites: {};
};
export type ProgramaGetPayload<S extends boolean | null | undefined | ProgramaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProgramaPayload, S>;
export type ProgramaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProgramaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProgramaCountAggregateInputType | true;
};
export interface ProgramaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Programa'];
        meta: {
            name: 'Programa';
        };
    };
    findUnique<T extends ProgramaFindUniqueArgs>(args: Prisma.SelectSubset<T, ProgramaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProgramaClient<runtime.Types.Result.GetResult<Prisma.$ProgramaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProgramaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProgramaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProgramaClient<runtime.Types.Result.GetResult<Prisma.$ProgramaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProgramaFindFirstArgs>(args?: Prisma.SelectSubset<T, ProgramaFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProgramaClient<runtime.Types.Result.GetResult<Prisma.$ProgramaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProgramaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProgramaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProgramaClient<runtime.Types.Result.GetResult<Prisma.$ProgramaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProgramaFindManyArgs>(args?: Prisma.SelectSubset<T, ProgramaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgramaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProgramaCreateArgs>(args: Prisma.SelectSubset<T, ProgramaCreateArgs<ExtArgs>>): Prisma.Prisma__ProgramaClient<runtime.Types.Result.GetResult<Prisma.$ProgramaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProgramaCreateManyArgs>(args?: Prisma.SelectSubset<T, ProgramaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProgramaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProgramaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgramaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProgramaDeleteArgs>(args: Prisma.SelectSubset<T, ProgramaDeleteArgs<ExtArgs>>): Prisma.Prisma__ProgramaClient<runtime.Types.Result.GetResult<Prisma.$ProgramaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProgramaUpdateArgs>(args: Prisma.SelectSubset<T, ProgramaUpdateArgs<ExtArgs>>): Prisma.Prisma__ProgramaClient<runtime.Types.Result.GetResult<Prisma.$ProgramaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProgramaDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProgramaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProgramaUpdateManyArgs>(args: Prisma.SelectSubset<T, ProgramaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProgramaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProgramaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgramaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProgramaUpsertArgs>(args: Prisma.SelectSubset<T, ProgramaUpsertArgs<ExtArgs>>): Prisma.Prisma__ProgramaClient<runtime.Types.Result.GetResult<Prisma.$ProgramaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProgramaCountArgs>(args?: Prisma.Subset<T, ProgramaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProgramaCountAggregateOutputType> : number>;
    aggregate<T extends ProgramaAggregateArgs>(args: Prisma.Subset<T, ProgramaAggregateArgs>): Prisma.PrismaPromise<GetProgramaAggregateType<T>>;
    groupBy<T extends ProgramaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProgramaGroupByArgs['orderBy'];
    } : {
        orderBy?: ProgramaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProgramaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProgramaFieldRefs;
}
export interface Prisma__ProgramaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organiza<T extends Prisma.Programa$organizaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Programa$organizaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizaPosgradoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProgramaFieldRefs {
    readonly idPrograma: Prisma.FieldRef<"Programa", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Programa", 'String'>;
    readonly tipo: Prisma.FieldRef<"Programa", 'String'>;
    readonly costo: Prisma.FieldRef<"Programa", 'String'>;
}
export type ProgramaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramaSelect<ExtArgs> | null;
    omit?: Prisma.ProgramaOmit<ExtArgs> | null;
    include?: Prisma.ProgramaInclude<ExtArgs> | null;
    where: Prisma.ProgramaWhereUniqueInput;
};
export type ProgramaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramaSelect<ExtArgs> | null;
    omit?: Prisma.ProgramaOmit<ExtArgs> | null;
    include?: Prisma.ProgramaInclude<ExtArgs> | null;
    where: Prisma.ProgramaWhereUniqueInput;
};
export type ProgramaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramaSelect<ExtArgs> | null;
    omit?: Prisma.ProgramaOmit<ExtArgs> | null;
    include?: Prisma.ProgramaInclude<ExtArgs> | null;
    where?: Prisma.ProgramaWhereInput;
    orderBy?: Prisma.ProgramaOrderByWithRelationInput | Prisma.ProgramaOrderByWithRelationInput[];
    cursor?: Prisma.ProgramaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProgramaScalarFieldEnum | Prisma.ProgramaScalarFieldEnum[];
};
export type ProgramaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramaSelect<ExtArgs> | null;
    omit?: Prisma.ProgramaOmit<ExtArgs> | null;
    include?: Prisma.ProgramaInclude<ExtArgs> | null;
    where?: Prisma.ProgramaWhereInput;
    orderBy?: Prisma.ProgramaOrderByWithRelationInput | Prisma.ProgramaOrderByWithRelationInput[];
    cursor?: Prisma.ProgramaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProgramaScalarFieldEnum | Prisma.ProgramaScalarFieldEnum[];
};
export type ProgramaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramaSelect<ExtArgs> | null;
    omit?: Prisma.ProgramaOmit<ExtArgs> | null;
    include?: Prisma.ProgramaInclude<ExtArgs> | null;
    where?: Prisma.ProgramaWhereInput;
    orderBy?: Prisma.ProgramaOrderByWithRelationInput | Prisma.ProgramaOrderByWithRelationInput[];
    cursor?: Prisma.ProgramaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProgramaScalarFieldEnum | Prisma.ProgramaScalarFieldEnum[];
};
export type ProgramaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramaSelect<ExtArgs> | null;
    omit?: Prisma.ProgramaOmit<ExtArgs> | null;
    include?: Prisma.ProgramaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProgramaCreateInput, Prisma.ProgramaUncheckedCreateInput>;
};
export type ProgramaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProgramaCreateManyInput | Prisma.ProgramaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProgramaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProgramaOmit<ExtArgs> | null;
    data: Prisma.ProgramaCreateManyInput | Prisma.ProgramaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProgramaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramaSelect<ExtArgs> | null;
    omit?: Prisma.ProgramaOmit<ExtArgs> | null;
    include?: Prisma.ProgramaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProgramaUpdateInput, Prisma.ProgramaUncheckedUpdateInput>;
    where: Prisma.ProgramaWhereUniqueInput;
};
export type ProgramaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProgramaUpdateManyMutationInput, Prisma.ProgramaUncheckedUpdateManyInput>;
    where?: Prisma.ProgramaWhereInput;
    limit?: number;
};
export type ProgramaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProgramaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProgramaUpdateManyMutationInput, Prisma.ProgramaUncheckedUpdateManyInput>;
    where?: Prisma.ProgramaWhereInput;
    limit?: number;
};
export type ProgramaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramaSelect<ExtArgs> | null;
    omit?: Prisma.ProgramaOmit<ExtArgs> | null;
    include?: Prisma.ProgramaInclude<ExtArgs> | null;
    where: Prisma.ProgramaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgramaCreateInput, Prisma.ProgramaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProgramaUpdateInput, Prisma.ProgramaUncheckedUpdateInput>;
};
export type ProgramaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramaSelect<ExtArgs> | null;
    omit?: Prisma.ProgramaOmit<ExtArgs> | null;
    include?: Prisma.ProgramaInclude<ExtArgs> | null;
    where: Prisma.ProgramaWhereUniqueInput;
};
export type ProgramaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgramaWhereInput;
    limit?: number;
};
export type Programa$organizaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProgramaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramaSelect<ExtArgs> | null;
    omit?: Prisma.ProgramaOmit<ExtArgs> | null;
    include?: Prisma.ProgramaInclude<ExtArgs> | null;
};
