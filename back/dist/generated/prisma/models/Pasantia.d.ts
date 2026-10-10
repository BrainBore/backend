import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type PasantiaModel = runtime.Types.Result.DefaultSelection<Prisma.$PasantiaPayload>;
export type AggregatePasantia = {
    _count: PasantiaCountAggregateOutputType | null;
    _avg: PasantiaAvgAggregateOutputType | null;
    _sum: PasantiaSumAggregateOutputType | null;
    _min: PasantiaMinAggregateOutputType | null;
    _max: PasantiaMaxAggregateOutputType | null;
};
export type PasantiaAvgAggregateOutputType = {
    id: number | null;
};
export type PasantiaSumAggregateOutputType = {
    id: number | null;
};
export type PasantiaMinAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    tipo: string | null;
    descripcion: string | null;
    area: string | null;
    empresa: string | null;
    fechaCierre: Date | null;
    requisitos: string | null;
};
export type PasantiaMaxAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    tipo: string | null;
    descripcion: string | null;
    area: string | null;
    empresa: string | null;
    fechaCierre: Date | null;
    requisitos: string | null;
};
export type PasantiaCountAggregateOutputType = {
    id: number;
    titulo: number;
    tipo: number;
    descripcion: number;
    area: number;
    empresa: number;
    fechaCierre: number;
    requisitos: number;
    _all: number;
};
export type PasantiaAvgAggregateInputType = {
    id?: true;
};
export type PasantiaSumAggregateInputType = {
    id?: true;
};
export type PasantiaMinAggregateInputType = {
    id?: true;
    titulo?: true;
    tipo?: true;
    descripcion?: true;
    area?: true;
    empresa?: true;
    fechaCierre?: true;
    requisitos?: true;
};
export type PasantiaMaxAggregateInputType = {
    id?: true;
    titulo?: true;
    tipo?: true;
    descripcion?: true;
    area?: true;
    empresa?: true;
    fechaCierre?: true;
    requisitos?: true;
};
export type PasantiaCountAggregateInputType = {
    id?: true;
    titulo?: true;
    tipo?: true;
    descripcion?: true;
    area?: true;
    empresa?: true;
    fechaCierre?: true;
    requisitos?: true;
    _all?: true;
};
export type PasantiaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PasantiaWhereInput;
    orderBy?: Prisma.PasantiaOrderByWithRelationInput | Prisma.PasantiaOrderByWithRelationInput[];
    cursor?: Prisma.PasantiaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PasantiaCountAggregateInputType;
    _avg?: PasantiaAvgAggregateInputType;
    _sum?: PasantiaSumAggregateInputType;
    _min?: PasantiaMinAggregateInputType;
    _max?: PasantiaMaxAggregateInputType;
};
export type GetPasantiaAggregateType<T extends PasantiaAggregateArgs> = {
    [P in keyof T & keyof AggregatePasantia]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePasantia[P]> : Prisma.GetScalarType<T[P], AggregatePasantia[P]>;
};
export type PasantiaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PasantiaWhereInput;
    orderBy?: Prisma.PasantiaOrderByWithAggregationInput | Prisma.PasantiaOrderByWithAggregationInput[];
    by: Prisma.PasantiaScalarFieldEnum[] | Prisma.PasantiaScalarFieldEnum;
    having?: Prisma.PasantiaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PasantiaCountAggregateInputType | true;
    _avg?: PasantiaAvgAggregateInputType;
    _sum?: PasantiaSumAggregateInputType;
    _min?: PasantiaMinAggregateInputType;
    _max?: PasantiaMaxAggregateInputType;
};
export type PasantiaGroupByOutputType = {
    id: number;
    titulo: string;
    tipo: string;
    descripcion: string;
    area: string;
    empresa: string;
    fechaCierre: Date | null;
    requisitos: string;
    _count: PasantiaCountAggregateOutputType | null;
    _avg: PasantiaAvgAggregateOutputType | null;
    _sum: PasantiaSumAggregateOutputType | null;
    _min: PasantiaMinAggregateOutputType | null;
    _max: PasantiaMaxAggregateOutputType | null;
};
export type GetPasantiaGroupByPayload<T extends PasantiaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PasantiaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PasantiaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PasantiaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PasantiaGroupByOutputType[P]>;
}>>;
export type PasantiaWhereInput = {
    AND?: Prisma.PasantiaWhereInput | Prisma.PasantiaWhereInput[];
    OR?: Prisma.PasantiaWhereInput[];
    NOT?: Prisma.PasantiaWhereInput | Prisma.PasantiaWhereInput[];
    id?: Prisma.IntFilter<"Pasantia"> | number;
    titulo?: Prisma.StringFilter<"Pasantia"> | string;
    tipo?: Prisma.StringFilter<"Pasantia"> | string;
    descripcion?: Prisma.StringFilter<"Pasantia"> | string;
    area?: Prisma.StringFilter<"Pasantia"> | string;
    empresa?: Prisma.StringFilter<"Pasantia"> | string;
    fechaCierre?: Prisma.DateTimeNullableFilter<"Pasantia"> | Date | string | null;
    requisitos?: Prisma.StringFilter<"Pasantia"> | string;
};
export type PasantiaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    empresa?: Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrderInput | Prisma.SortOrder;
    requisitos?: Prisma.SortOrder;
};
export type PasantiaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.PasantiaWhereInput | Prisma.PasantiaWhereInput[];
    OR?: Prisma.PasantiaWhereInput[];
    NOT?: Prisma.PasantiaWhereInput | Prisma.PasantiaWhereInput[];
    titulo?: Prisma.StringFilter<"Pasantia"> | string;
    tipo?: Prisma.StringFilter<"Pasantia"> | string;
    descripcion?: Prisma.StringFilter<"Pasantia"> | string;
    area?: Prisma.StringFilter<"Pasantia"> | string;
    empresa?: Prisma.StringFilter<"Pasantia"> | string;
    fechaCierre?: Prisma.DateTimeNullableFilter<"Pasantia"> | Date | string | null;
    requisitos?: Prisma.StringFilter<"Pasantia"> | string;
}, "id">;
export type PasantiaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    empresa?: Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrderInput | Prisma.SortOrder;
    requisitos?: Prisma.SortOrder;
    _count?: Prisma.PasantiaCountOrderByAggregateInput;
    _avg?: Prisma.PasantiaAvgOrderByAggregateInput;
    _max?: Prisma.PasantiaMaxOrderByAggregateInput;
    _min?: Prisma.PasantiaMinOrderByAggregateInput;
    _sum?: Prisma.PasantiaSumOrderByAggregateInput;
};
export type PasantiaScalarWhereWithAggregatesInput = {
    AND?: Prisma.PasantiaScalarWhereWithAggregatesInput | Prisma.PasantiaScalarWhereWithAggregatesInput[];
    OR?: Prisma.PasantiaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PasantiaScalarWhereWithAggregatesInput | Prisma.PasantiaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Pasantia"> | number;
    titulo?: Prisma.StringWithAggregatesFilter<"Pasantia"> | string;
    tipo?: Prisma.StringWithAggregatesFilter<"Pasantia"> | string;
    descripcion?: Prisma.StringWithAggregatesFilter<"Pasantia"> | string;
    area?: Prisma.StringWithAggregatesFilter<"Pasantia"> | string;
    empresa?: Prisma.StringWithAggregatesFilter<"Pasantia"> | string;
    fechaCierre?: Prisma.DateTimeNullableWithAggregatesFilter<"Pasantia"> | Date | string | null;
    requisitos?: Prisma.StringWithAggregatesFilter<"Pasantia"> | string;
};
export type PasantiaCreateInput = {
    titulo: string;
    tipo: string;
    descripcion: string;
    area: string;
    empresa: string;
    fechaCierre?: Date | string | null;
    requisitos: string;
};
export type PasantiaUncheckedCreateInput = {
    id?: number;
    titulo: string;
    tipo: string;
    descripcion: string;
    area: string;
    empresa: string;
    fechaCierre?: Date | string | null;
    requisitos: string;
};
export type PasantiaUpdateInput = {
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.StringFieldUpdateOperationsInput | string;
    empresa?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    requisitos?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PasantiaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.StringFieldUpdateOperationsInput | string;
    empresa?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    requisitos?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PasantiaCreateManyInput = {
    id?: number;
    titulo: string;
    tipo: string;
    descripcion: string;
    area: string;
    empresa: string;
    fechaCierre?: Date | string | null;
    requisitos: string;
};
export type PasantiaUpdateManyMutationInput = {
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.StringFieldUpdateOperationsInput | string;
    empresa?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    requisitos?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PasantiaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.StringFieldUpdateOperationsInput | string;
    empresa?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    requisitos?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PasantiaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    empresa?: Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrder;
    requisitos?: Prisma.SortOrder;
};
export type PasantiaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type PasantiaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    empresa?: Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrder;
    requisitos?: Prisma.SortOrder;
};
export type PasantiaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    empresa?: Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrder;
    requisitos?: Prisma.SortOrder;
};
export type PasantiaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type PasantiaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    tipo?: boolean;
    descripcion?: boolean;
    area?: boolean;
    empresa?: boolean;
    fechaCierre?: boolean;
    requisitos?: boolean;
}, ExtArgs["result"]["pasantia"]>;
export type PasantiaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    tipo?: boolean;
    descripcion?: boolean;
    area?: boolean;
    empresa?: boolean;
    fechaCierre?: boolean;
    requisitos?: boolean;
}, ExtArgs["result"]["pasantia"]>;
export type PasantiaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    tipo?: boolean;
    descripcion?: boolean;
    area?: boolean;
    empresa?: boolean;
    fechaCierre?: boolean;
    requisitos?: boolean;
}, ExtArgs["result"]["pasantia"]>;
export type PasantiaSelectScalar = {
    id?: boolean;
    titulo?: boolean;
    tipo?: boolean;
    descripcion?: boolean;
    area?: boolean;
    empresa?: boolean;
    fechaCierre?: boolean;
    requisitos?: boolean;
};
export type PasantiaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "titulo" | "tipo" | "descripcion" | "area" | "empresa" | "fechaCierre" | "requisitos", ExtArgs["result"]["pasantia"]>;
export type $PasantiaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Pasantia";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        titulo: string;
        tipo: string;
        descripcion: string;
        area: string;
        empresa: string;
        fechaCierre: Date | null;
        requisitos: string;
    }, ExtArgs["result"]["pasantia"]>;
    composites: {};
};
export type PasantiaGetPayload<S extends boolean | null | undefined | PasantiaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PasantiaPayload, S>;
export type PasantiaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PasantiaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PasantiaCountAggregateInputType | true;
};
export interface PasantiaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Pasantia'];
        meta: {
            name: 'Pasantia';
        };
    };
    findUnique<T extends PasantiaFindUniqueArgs>(args: Prisma.SelectSubset<T, PasantiaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PasantiaClient<runtime.Types.Result.GetResult<Prisma.$PasantiaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PasantiaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PasantiaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PasantiaClient<runtime.Types.Result.GetResult<Prisma.$PasantiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PasantiaFindFirstArgs>(args?: Prisma.SelectSubset<T, PasantiaFindFirstArgs<ExtArgs>>): Prisma.Prisma__PasantiaClient<runtime.Types.Result.GetResult<Prisma.$PasantiaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PasantiaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PasantiaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PasantiaClient<runtime.Types.Result.GetResult<Prisma.$PasantiaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PasantiaFindManyArgs>(args?: Prisma.SelectSubset<T, PasantiaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PasantiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PasantiaCreateArgs>(args: Prisma.SelectSubset<T, PasantiaCreateArgs<ExtArgs>>): Prisma.Prisma__PasantiaClient<runtime.Types.Result.GetResult<Prisma.$PasantiaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PasantiaCreateManyArgs>(args?: Prisma.SelectSubset<T, PasantiaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PasantiaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PasantiaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PasantiaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PasantiaDeleteArgs>(args: Prisma.SelectSubset<T, PasantiaDeleteArgs<ExtArgs>>): Prisma.Prisma__PasantiaClient<runtime.Types.Result.GetResult<Prisma.$PasantiaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PasantiaUpdateArgs>(args: Prisma.SelectSubset<T, PasantiaUpdateArgs<ExtArgs>>): Prisma.Prisma__PasantiaClient<runtime.Types.Result.GetResult<Prisma.$PasantiaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PasantiaDeleteManyArgs>(args?: Prisma.SelectSubset<T, PasantiaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PasantiaUpdateManyArgs>(args: Prisma.SelectSubset<T, PasantiaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PasantiaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PasantiaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PasantiaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PasantiaUpsertArgs>(args: Prisma.SelectSubset<T, PasantiaUpsertArgs<ExtArgs>>): Prisma.Prisma__PasantiaClient<runtime.Types.Result.GetResult<Prisma.$PasantiaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PasantiaCountArgs>(args?: Prisma.Subset<T, PasantiaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PasantiaCountAggregateOutputType> : number>;
    aggregate<T extends PasantiaAggregateArgs>(args: Prisma.Subset<T, PasantiaAggregateArgs>): Prisma.PrismaPromise<GetPasantiaAggregateType<T>>;
    groupBy<T extends PasantiaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PasantiaGroupByArgs['orderBy'];
    } : {
        orderBy?: PasantiaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PasantiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasantiaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PasantiaFieldRefs;
}
export interface Prisma__PasantiaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PasantiaFieldRefs {
    readonly id: Prisma.FieldRef<"Pasantia", 'Int'>;
    readonly titulo: Prisma.FieldRef<"Pasantia", 'String'>;
    readonly tipo: Prisma.FieldRef<"Pasantia", 'String'>;
    readonly descripcion: Prisma.FieldRef<"Pasantia", 'String'>;
    readonly area: Prisma.FieldRef<"Pasantia", 'String'>;
    readonly empresa: Prisma.FieldRef<"Pasantia", 'String'>;
    readonly fechaCierre: Prisma.FieldRef<"Pasantia", 'DateTime'>;
    readonly requisitos: Prisma.FieldRef<"Pasantia", 'String'>;
}
export type PasantiaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PasantiaSelect<ExtArgs> | null;
    omit?: Prisma.PasantiaOmit<ExtArgs> | null;
    where: Prisma.PasantiaWhereUniqueInput;
};
export type PasantiaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PasantiaSelect<ExtArgs> | null;
    omit?: Prisma.PasantiaOmit<ExtArgs> | null;
    where: Prisma.PasantiaWhereUniqueInput;
};
export type PasantiaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PasantiaSelect<ExtArgs> | null;
    omit?: Prisma.PasantiaOmit<ExtArgs> | null;
    where?: Prisma.PasantiaWhereInput;
    orderBy?: Prisma.PasantiaOrderByWithRelationInput | Prisma.PasantiaOrderByWithRelationInput[];
    cursor?: Prisma.PasantiaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PasantiaScalarFieldEnum | Prisma.PasantiaScalarFieldEnum[];
};
export type PasantiaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PasantiaSelect<ExtArgs> | null;
    omit?: Prisma.PasantiaOmit<ExtArgs> | null;
    where?: Prisma.PasantiaWhereInput;
    orderBy?: Prisma.PasantiaOrderByWithRelationInput | Prisma.PasantiaOrderByWithRelationInput[];
    cursor?: Prisma.PasantiaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PasantiaScalarFieldEnum | Prisma.PasantiaScalarFieldEnum[];
};
export type PasantiaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PasantiaSelect<ExtArgs> | null;
    omit?: Prisma.PasantiaOmit<ExtArgs> | null;
    where?: Prisma.PasantiaWhereInput;
    orderBy?: Prisma.PasantiaOrderByWithRelationInput | Prisma.PasantiaOrderByWithRelationInput[];
    cursor?: Prisma.PasantiaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PasantiaScalarFieldEnum | Prisma.PasantiaScalarFieldEnum[];
};
export type PasantiaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PasantiaSelect<ExtArgs> | null;
    omit?: Prisma.PasantiaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PasantiaCreateInput, Prisma.PasantiaUncheckedCreateInput>;
};
export type PasantiaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PasantiaCreateManyInput | Prisma.PasantiaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PasantiaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PasantiaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PasantiaOmit<ExtArgs> | null;
    data: Prisma.PasantiaCreateManyInput | Prisma.PasantiaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PasantiaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PasantiaSelect<ExtArgs> | null;
    omit?: Prisma.PasantiaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PasantiaUpdateInput, Prisma.PasantiaUncheckedUpdateInput>;
    where: Prisma.PasantiaWhereUniqueInput;
};
export type PasantiaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PasantiaUpdateManyMutationInput, Prisma.PasantiaUncheckedUpdateManyInput>;
    where?: Prisma.PasantiaWhereInput;
    limit?: number;
};
export type PasantiaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PasantiaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PasantiaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PasantiaUpdateManyMutationInput, Prisma.PasantiaUncheckedUpdateManyInput>;
    where?: Prisma.PasantiaWhereInput;
    limit?: number;
};
export type PasantiaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PasantiaSelect<ExtArgs> | null;
    omit?: Prisma.PasantiaOmit<ExtArgs> | null;
    where: Prisma.PasantiaWhereUniqueInput;
    create: Prisma.XOR<Prisma.PasantiaCreateInput, Prisma.PasantiaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PasantiaUpdateInput, Prisma.PasantiaUncheckedUpdateInput>;
};
export type PasantiaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PasantiaSelect<ExtArgs> | null;
    omit?: Prisma.PasantiaOmit<ExtArgs> | null;
    where: Prisma.PasantiaWhereUniqueInput;
};
export type PasantiaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PasantiaWhereInput;
    limit?: number;
};
export type PasantiaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PasantiaSelect<ExtArgs> | null;
    omit?: Prisma.PasantiaOmit<ExtArgs> | null;
};
