import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ConvocatoriaAuxiliaturaModel = runtime.Types.Result.DefaultSelection<Prisma.$ConvocatoriaAuxiliaturaPayload>;
export type AggregateConvocatoriaAuxiliatura = {
    _count: ConvocatoriaAuxiliaturaCountAggregateOutputType | null;
    _avg: ConvocatoriaAuxiliaturaAvgAggregateOutputType | null;
    _sum: ConvocatoriaAuxiliaturaSumAggregateOutputType | null;
    _min: ConvocatoriaAuxiliaturaMinAggregateOutputType | null;
    _max: ConvocatoriaAuxiliaturaMaxAggregateOutputType | null;
};
export type ConvocatoriaAuxiliaturaAvgAggregateOutputType = {
    id: number | null;
    plazas: number | null;
};
export type ConvocatoriaAuxiliaturaSumAggregateOutputType = {
    id: number | null;
    plazas: number | null;
};
export type ConvocatoriaAuxiliaturaMinAggregateOutputType = {
    id: number | null;
    materia: string | null;
    tipo: string | null;
    descripcion: string | null;
    fechaPublicacion: Date | null;
    fechaCierre: Date | null;
    plazas: number | null;
    estado: string | null;
};
export type ConvocatoriaAuxiliaturaMaxAggregateOutputType = {
    id: number | null;
    materia: string | null;
    tipo: string | null;
    descripcion: string | null;
    fechaPublicacion: Date | null;
    fechaCierre: Date | null;
    plazas: number | null;
    estado: string | null;
};
export type ConvocatoriaAuxiliaturaCountAggregateOutputType = {
    id: number;
    materia: number;
    tipo: number;
    descripcion: number;
    fechaPublicacion: number;
    fechaCierre: number;
    plazas: number;
    estado: number;
    _all: number;
};
export type ConvocatoriaAuxiliaturaAvgAggregateInputType = {
    id?: true;
    plazas?: true;
};
export type ConvocatoriaAuxiliaturaSumAggregateInputType = {
    id?: true;
    plazas?: true;
};
export type ConvocatoriaAuxiliaturaMinAggregateInputType = {
    id?: true;
    materia?: true;
    tipo?: true;
    descripcion?: true;
    fechaPublicacion?: true;
    fechaCierre?: true;
    plazas?: true;
    estado?: true;
};
export type ConvocatoriaAuxiliaturaMaxAggregateInputType = {
    id?: true;
    materia?: true;
    tipo?: true;
    descripcion?: true;
    fechaPublicacion?: true;
    fechaCierre?: true;
    plazas?: true;
    estado?: true;
};
export type ConvocatoriaAuxiliaturaCountAggregateInputType = {
    id?: true;
    materia?: true;
    tipo?: true;
    descripcion?: true;
    fechaPublicacion?: true;
    fechaCierre?: true;
    plazas?: true;
    estado?: true;
    _all?: true;
};
export type ConvocatoriaAuxiliaturaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConvocatoriaAuxiliaturaWhereInput;
    orderBy?: Prisma.ConvocatoriaAuxiliaturaOrderByWithRelationInput | Prisma.ConvocatoriaAuxiliaturaOrderByWithRelationInput[];
    cursor?: Prisma.ConvocatoriaAuxiliaturaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ConvocatoriaAuxiliaturaCountAggregateInputType;
    _avg?: ConvocatoriaAuxiliaturaAvgAggregateInputType;
    _sum?: ConvocatoriaAuxiliaturaSumAggregateInputType;
    _min?: ConvocatoriaAuxiliaturaMinAggregateInputType;
    _max?: ConvocatoriaAuxiliaturaMaxAggregateInputType;
};
export type GetConvocatoriaAuxiliaturaAggregateType<T extends ConvocatoriaAuxiliaturaAggregateArgs> = {
    [P in keyof T & keyof AggregateConvocatoriaAuxiliatura]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConvocatoriaAuxiliatura[P]> : Prisma.GetScalarType<T[P], AggregateConvocatoriaAuxiliatura[P]>;
};
export type ConvocatoriaAuxiliaturaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConvocatoriaAuxiliaturaWhereInput;
    orderBy?: Prisma.ConvocatoriaAuxiliaturaOrderByWithAggregationInput | Prisma.ConvocatoriaAuxiliaturaOrderByWithAggregationInput[];
    by: Prisma.ConvocatoriaAuxiliaturaScalarFieldEnum[] | Prisma.ConvocatoriaAuxiliaturaScalarFieldEnum;
    having?: Prisma.ConvocatoriaAuxiliaturaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConvocatoriaAuxiliaturaCountAggregateInputType | true;
    _avg?: ConvocatoriaAuxiliaturaAvgAggregateInputType;
    _sum?: ConvocatoriaAuxiliaturaSumAggregateInputType;
    _min?: ConvocatoriaAuxiliaturaMinAggregateInputType;
    _max?: ConvocatoriaAuxiliaturaMaxAggregateInputType;
};
export type ConvocatoriaAuxiliaturaGroupByOutputType = {
    id: number;
    materia: string;
    tipo: string;
    descripcion: string;
    fechaPublicacion: Date | null;
    fechaCierre: Date | null;
    plazas: number;
    estado: string;
    _count: ConvocatoriaAuxiliaturaCountAggregateOutputType | null;
    _avg: ConvocatoriaAuxiliaturaAvgAggregateOutputType | null;
    _sum: ConvocatoriaAuxiliaturaSumAggregateOutputType | null;
    _min: ConvocatoriaAuxiliaturaMinAggregateOutputType | null;
    _max: ConvocatoriaAuxiliaturaMaxAggregateOutputType | null;
};
export type GetConvocatoriaAuxiliaturaGroupByPayload<T extends ConvocatoriaAuxiliaturaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ConvocatoriaAuxiliaturaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ConvocatoriaAuxiliaturaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ConvocatoriaAuxiliaturaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ConvocatoriaAuxiliaturaGroupByOutputType[P]>;
}>>;
export type ConvocatoriaAuxiliaturaWhereInput = {
    AND?: Prisma.ConvocatoriaAuxiliaturaWhereInput | Prisma.ConvocatoriaAuxiliaturaWhereInput[];
    OR?: Prisma.ConvocatoriaAuxiliaturaWhereInput[];
    NOT?: Prisma.ConvocatoriaAuxiliaturaWhereInput | Prisma.ConvocatoriaAuxiliaturaWhereInput[];
    id?: Prisma.IntFilter<"ConvocatoriaAuxiliatura"> | number;
    materia?: Prisma.StringFilter<"ConvocatoriaAuxiliatura"> | string;
    tipo?: Prisma.StringFilter<"ConvocatoriaAuxiliatura"> | string;
    descripcion?: Prisma.StringFilter<"ConvocatoriaAuxiliatura"> | string;
    fechaPublicacion?: Prisma.DateTimeNullableFilter<"ConvocatoriaAuxiliatura"> | Date | string | null;
    fechaCierre?: Prisma.DateTimeNullableFilter<"ConvocatoriaAuxiliatura"> | Date | string | null;
    plazas?: Prisma.IntFilter<"ConvocatoriaAuxiliatura"> | number;
    estado?: Prisma.StringFilter<"ConvocatoriaAuxiliatura"> | string;
};
export type ConvocatoriaAuxiliaturaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    materia?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    fechaPublicacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrderInput | Prisma.SortOrder;
    plazas?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type ConvocatoriaAuxiliaturaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ConvocatoriaAuxiliaturaWhereInput | Prisma.ConvocatoriaAuxiliaturaWhereInput[];
    OR?: Prisma.ConvocatoriaAuxiliaturaWhereInput[];
    NOT?: Prisma.ConvocatoriaAuxiliaturaWhereInput | Prisma.ConvocatoriaAuxiliaturaWhereInput[];
    materia?: Prisma.StringFilter<"ConvocatoriaAuxiliatura"> | string;
    tipo?: Prisma.StringFilter<"ConvocatoriaAuxiliatura"> | string;
    descripcion?: Prisma.StringFilter<"ConvocatoriaAuxiliatura"> | string;
    fechaPublicacion?: Prisma.DateTimeNullableFilter<"ConvocatoriaAuxiliatura"> | Date | string | null;
    fechaCierre?: Prisma.DateTimeNullableFilter<"ConvocatoriaAuxiliatura"> | Date | string | null;
    plazas?: Prisma.IntFilter<"ConvocatoriaAuxiliatura"> | number;
    estado?: Prisma.StringFilter<"ConvocatoriaAuxiliatura"> | string;
}, "id">;
export type ConvocatoriaAuxiliaturaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    materia?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    fechaPublicacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrderInput | Prisma.SortOrder;
    plazas?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    _count?: Prisma.ConvocatoriaAuxiliaturaCountOrderByAggregateInput;
    _avg?: Prisma.ConvocatoriaAuxiliaturaAvgOrderByAggregateInput;
    _max?: Prisma.ConvocatoriaAuxiliaturaMaxOrderByAggregateInput;
    _min?: Prisma.ConvocatoriaAuxiliaturaMinOrderByAggregateInput;
    _sum?: Prisma.ConvocatoriaAuxiliaturaSumOrderByAggregateInput;
};
export type ConvocatoriaAuxiliaturaScalarWhereWithAggregatesInput = {
    AND?: Prisma.ConvocatoriaAuxiliaturaScalarWhereWithAggregatesInput | Prisma.ConvocatoriaAuxiliaturaScalarWhereWithAggregatesInput[];
    OR?: Prisma.ConvocatoriaAuxiliaturaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ConvocatoriaAuxiliaturaScalarWhereWithAggregatesInput | Prisma.ConvocatoriaAuxiliaturaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ConvocatoriaAuxiliatura"> | number;
    materia?: Prisma.StringWithAggregatesFilter<"ConvocatoriaAuxiliatura"> | string;
    tipo?: Prisma.StringWithAggregatesFilter<"ConvocatoriaAuxiliatura"> | string;
    descripcion?: Prisma.StringWithAggregatesFilter<"ConvocatoriaAuxiliatura"> | string;
    fechaPublicacion?: Prisma.DateTimeNullableWithAggregatesFilter<"ConvocatoriaAuxiliatura"> | Date | string | null;
    fechaCierre?: Prisma.DateTimeNullableWithAggregatesFilter<"ConvocatoriaAuxiliatura"> | Date | string | null;
    plazas?: Prisma.IntWithAggregatesFilter<"ConvocatoriaAuxiliatura"> | number;
    estado?: Prisma.StringWithAggregatesFilter<"ConvocatoriaAuxiliatura"> | string;
};
export type ConvocatoriaAuxiliaturaCreateInput = {
    materia: string;
    tipo: string;
    descripcion: string;
    fechaPublicacion?: Date | string | null;
    fechaCierre?: Date | string | null;
    plazas: number;
    estado: string;
};
export type ConvocatoriaAuxiliaturaUncheckedCreateInput = {
    id?: number;
    materia: string;
    tipo: string;
    descripcion: string;
    fechaPublicacion?: Date | string | null;
    fechaCierre?: Date | string | null;
    plazas: number;
    estado: string;
};
export type ConvocatoriaAuxiliaturaUpdateInput = {
    materia?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaPublicacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    plazas?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ConvocatoriaAuxiliaturaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    materia?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaPublicacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    plazas?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ConvocatoriaAuxiliaturaCreateManyInput = {
    id?: number;
    materia: string;
    tipo: string;
    descripcion: string;
    fechaPublicacion?: Date | string | null;
    fechaCierre?: Date | string | null;
    plazas: number;
    estado: string;
};
export type ConvocatoriaAuxiliaturaUpdateManyMutationInput = {
    materia?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaPublicacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    plazas?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ConvocatoriaAuxiliaturaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    materia?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaPublicacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    plazas?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ConvocatoriaAuxiliaturaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    materia?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    fechaPublicacion?: Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrder;
    plazas?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type ConvocatoriaAuxiliaturaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    plazas?: Prisma.SortOrder;
};
export type ConvocatoriaAuxiliaturaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    materia?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    fechaPublicacion?: Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrder;
    plazas?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type ConvocatoriaAuxiliaturaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    materia?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    fechaPublicacion?: Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrder;
    plazas?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type ConvocatoriaAuxiliaturaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    plazas?: Prisma.SortOrder;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type ConvocatoriaAuxiliaturaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    materia?: boolean;
    tipo?: boolean;
    descripcion?: boolean;
    fechaPublicacion?: boolean;
    fechaCierre?: boolean;
    plazas?: boolean;
    estado?: boolean;
}, ExtArgs["result"]["convocatoriaAuxiliatura"]>;
export type ConvocatoriaAuxiliaturaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    materia?: boolean;
    tipo?: boolean;
    descripcion?: boolean;
    fechaPublicacion?: boolean;
    fechaCierre?: boolean;
    plazas?: boolean;
    estado?: boolean;
}, ExtArgs["result"]["convocatoriaAuxiliatura"]>;
export type ConvocatoriaAuxiliaturaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    materia?: boolean;
    tipo?: boolean;
    descripcion?: boolean;
    fechaPublicacion?: boolean;
    fechaCierre?: boolean;
    plazas?: boolean;
    estado?: boolean;
}, ExtArgs["result"]["convocatoriaAuxiliatura"]>;
export type ConvocatoriaAuxiliaturaSelectScalar = {
    id?: boolean;
    materia?: boolean;
    tipo?: boolean;
    descripcion?: boolean;
    fechaPublicacion?: boolean;
    fechaCierre?: boolean;
    plazas?: boolean;
    estado?: boolean;
};
export type ConvocatoriaAuxiliaturaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "materia" | "tipo" | "descripcion" | "fechaPublicacion" | "fechaCierre" | "plazas" | "estado", ExtArgs["result"]["convocatoriaAuxiliatura"]>;
export type $ConvocatoriaAuxiliaturaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ConvocatoriaAuxiliatura";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        materia: string;
        tipo: string;
        descripcion: string;
        fechaPublicacion: Date | null;
        fechaCierre: Date | null;
        plazas: number;
        estado: string;
    }, ExtArgs["result"]["convocatoriaAuxiliatura"]>;
    composites: {};
};
export type ConvocatoriaAuxiliaturaGetPayload<S extends boolean | null | undefined | ConvocatoriaAuxiliaturaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ConvocatoriaAuxiliaturaPayload, S>;
export type ConvocatoriaAuxiliaturaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ConvocatoriaAuxiliaturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ConvocatoriaAuxiliaturaCountAggregateInputType | true;
};
export interface ConvocatoriaAuxiliaturaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ConvocatoriaAuxiliatura'];
        meta: {
            name: 'ConvocatoriaAuxiliatura';
        };
    };
    findUnique<T extends ConvocatoriaAuxiliaturaFindUniqueArgs>(args: Prisma.SelectSubset<T, ConvocatoriaAuxiliaturaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ConvocatoriaAuxiliaturaClient<runtime.Types.Result.GetResult<Prisma.$ConvocatoriaAuxiliaturaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ConvocatoriaAuxiliaturaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ConvocatoriaAuxiliaturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConvocatoriaAuxiliaturaClient<runtime.Types.Result.GetResult<Prisma.$ConvocatoriaAuxiliaturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ConvocatoriaAuxiliaturaFindFirstArgs>(args?: Prisma.SelectSubset<T, ConvocatoriaAuxiliaturaFindFirstArgs<ExtArgs>>): Prisma.Prisma__ConvocatoriaAuxiliaturaClient<runtime.Types.Result.GetResult<Prisma.$ConvocatoriaAuxiliaturaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ConvocatoriaAuxiliaturaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ConvocatoriaAuxiliaturaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConvocatoriaAuxiliaturaClient<runtime.Types.Result.GetResult<Prisma.$ConvocatoriaAuxiliaturaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ConvocatoriaAuxiliaturaFindManyArgs>(args?: Prisma.SelectSubset<T, ConvocatoriaAuxiliaturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConvocatoriaAuxiliaturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ConvocatoriaAuxiliaturaCreateArgs>(args: Prisma.SelectSubset<T, ConvocatoriaAuxiliaturaCreateArgs<ExtArgs>>): Prisma.Prisma__ConvocatoriaAuxiliaturaClient<runtime.Types.Result.GetResult<Prisma.$ConvocatoriaAuxiliaturaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ConvocatoriaAuxiliaturaCreateManyArgs>(args?: Prisma.SelectSubset<T, ConvocatoriaAuxiliaturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ConvocatoriaAuxiliaturaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ConvocatoriaAuxiliaturaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConvocatoriaAuxiliaturaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ConvocatoriaAuxiliaturaDeleteArgs>(args: Prisma.SelectSubset<T, ConvocatoriaAuxiliaturaDeleteArgs<ExtArgs>>): Prisma.Prisma__ConvocatoriaAuxiliaturaClient<runtime.Types.Result.GetResult<Prisma.$ConvocatoriaAuxiliaturaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ConvocatoriaAuxiliaturaUpdateArgs>(args: Prisma.SelectSubset<T, ConvocatoriaAuxiliaturaUpdateArgs<ExtArgs>>): Prisma.Prisma__ConvocatoriaAuxiliaturaClient<runtime.Types.Result.GetResult<Prisma.$ConvocatoriaAuxiliaturaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ConvocatoriaAuxiliaturaDeleteManyArgs>(args?: Prisma.SelectSubset<T, ConvocatoriaAuxiliaturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ConvocatoriaAuxiliaturaUpdateManyArgs>(args: Prisma.SelectSubset<T, ConvocatoriaAuxiliaturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ConvocatoriaAuxiliaturaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ConvocatoriaAuxiliaturaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConvocatoriaAuxiliaturaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ConvocatoriaAuxiliaturaUpsertArgs>(args: Prisma.SelectSubset<T, ConvocatoriaAuxiliaturaUpsertArgs<ExtArgs>>): Prisma.Prisma__ConvocatoriaAuxiliaturaClient<runtime.Types.Result.GetResult<Prisma.$ConvocatoriaAuxiliaturaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ConvocatoriaAuxiliaturaCountArgs>(args?: Prisma.Subset<T, ConvocatoriaAuxiliaturaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ConvocatoriaAuxiliaturaCountAggregateOutputType> : number>;
    aggregate<T extends ConvocatoriaAuxiliaturaAggregateArgs>(args: Prisma.Subset<T, ConvocatoriaAuxiliaturaAggregateArgs>): Prisma.PrismaPromise<GetConvocatoriaAuxiliaturaAggregateType<T>>;
    groupBy<T extends ConvocatoriaAuxiliaturaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ConvocatoriaAuxiliaturaGroupByArgs['orderBy'];
    } : {
        orderBy?: ConvocatoriaAuxiliaturaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ConvocatoriaAuxiliaturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConvocatoriaAuxiliaturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ConvocatoriaAuxiliaturaFieldRefs;
}
export interface Prisma__ConvocatoriaAuxiliaturaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ConvocatoriaAuxiliaturaFieldRefs {
    readonly id: Prisma.FieldRef<"ConvocatoriaAuxiliatura", 'Int'>;
    readonly materia: Prisma.FieldRef<"ConvocatoriaAuxiliatura", 'String'>;
    readonly tipo: Prisma.FieldRef<"ConvocatoriaAuxiliatura", 'String'>;
    readonly descripcion: Prisma.FieldRef<"ConvocatoriaAuxiliatura", 'String'>;
    readonly fechaPublicacion: Prisma.FieldRef<"ConvocatoriaAuxiliatura", 'DateTime'>;
    readonly fechaCierre: Prisma.FieldRef<"ConvocatoriaAuxiliatura", 'DateTime'>;
    readonly plazas: Prisma.FieldRef<"ConvocatoriaAuxiliatura", 'Int'>;
    readonly estado: Prisma.FieldRef<"ConvocatoriaAuxiliatura", 'String'>;
}
export type ConvocatoriaAuxiliaturaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvocatoriaAuxiliaturaSelect<ExtArgs> | null;
    omit?: Prisma.ConvocatoriaAuxiliaturaOmit<ExtArgs> | null;
    where: Prisma.ConvocatoriaAuxiliaturaWhereUniqueInput;
};
export type ConvocatoriaAuxiliaturaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvocatoriaAuxiliaturaSelect<ExtArgs> | null;
    omit?: Prisma.ConvocatoriaAuxiliaturaOmit<ExtArgs> | null;
    where: Prisma.ConvocatoriaAuxiliaturaWhereUniqueInput;
};
export type ConvocatoriaAuxiliaturaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvocatoriaAuxiliaturaSelect<ExtArgs> | null;
    omit?: Prisma.ConvocatoriaAuxiliaturaOmit<ExtArgs> | null;
    where?: Prisma.ConvocatoriaAuxiliaturaWhereInput;
    orderBy?: Prisma.ConvocatoriaAuxiliaturaOrderByWithRelationInput | Prisma.ConvocatoriaAuxiliaturaOrderByWithRelationInput[];
    cursor?: Prisma.ConvocatoriaAuxiliaturaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConvocatoriaAuxiliaturaScalarFieldEnum | Prisma.ConvocatoriaAuxiliaturaScalarFieldEnum[];
};
export type ConvocatoriaAuxiliaturaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvocatoriaAuxiliaturaSelect<ExtArgs> | null;
    omit?: Prisma.ConvocatoriaAuxiliaturaOmit<ExtArgs> | null;
    where?: Prisma.ConvocatoriaAuxiliaturaWhereInput;
    orderBy?: Prisma.ConvocatoriaAuxiliaturaOrderByWithRelationInput | Prisma.ConvocatoriaAuxiliaturaOrderByWithRelationInput[];
    cursor?: Prisma.ConvocatoriaAuxiliaturaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConvocatoriaAuxiliaturaScalarFieldEnum | Prisma.ConvocatoriaAuxiliaturaScalarFieldEnum[];
};
export type ConvocatoriaAuxiliaturaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvocatoriaAuxiliaturaSelect<ExtArgs> | null;
    omit?: Prisma.ConvocatoriaAuxiliaturaOmit<ExtArgs> | null;
    where?: Prisma.ConvocatoriaAuxiliaturaWhereInput;
    orderBy?: Prisma.ConvocatoriaAuxiliaturaOrderByWithRelationInput | Prisma.ConvocatoriaAuxiliaturaOrderByWithRelationInput[];
    cursor?: Prisma.ConvocatoriaAuxiliaturaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConvocatoriaAuxiliaturaScalarFieldEnum | Prisma.ConvocatoriaAuxiliaturaScalarFieldEnum[];
};
export type ConvocatoriaAuxiliaturaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvocatoriaAuxiliaturaSelect<ExtArgs> | null;
    omit?: Prisma.ConvocatoriaAuxiliaturaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConvocatoriaAuxiliaturaCreateInput, Prisma.ConvocatoriaAuxiliaturaUncheckedCreateInput>;
};
export type ConvocatoriaAuxiliaturaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ConvocatoriaAuxiliaturaCreateManyInput | Prisma.ConvocatoriaAuxiliaturaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ConvocatoriaAuxiliaturaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvocatoriaAuxiliaturaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConvocatoriaAuxiliaturaOmit<ExtArgs> | null;
    data: Prisma.ConvocatoriaAuxiliaturaCreateManyInput | Prisma.ConvocatoriaAuxiliaturaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ConvocatoriaAuxiliaturaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvocatoriaAuxiliaturaSelect<ExtArgs> | null;
    omit?: Prisma.ConvocatoriaAuxiliaturaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConvocatoriaAuxiliaturaUpdateInput, Prisma.ConvocatoriaAuxiliaturaUncheckedUpdateInput>;
    where: Prisma.ConvocatoriaAuxiliaturaWhereUniqueInput;
};
export type ConvocatoriaAuxiliaturaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ConvocatoriaAuxiliaturaUpdateManyMutationInput, Prisma.ConvocatoriaAuxiliaturaUncheckedUpdateManyInput>;
    where?: Prisma.ConvocatoriaAuxiliaturaWhereInput;
    limit?: number;
};
export type ConvocatoriaAuxiliaturaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvocatoriaAuxiliaturaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConvocatoriaAuxiliaturaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConvocatoriaAuxiliaturaUpdateManyMutationInput, Prisma.ConvocatoriaAuxiliaturaUncheckedUpdateManyInput>;
    where?: Prisma.ConvocatoriaAuxiliaturaWhereInput;
    limit?: number;
};
export type ConvocatoriaAuxiliaturaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvocatoriaAuxiliaturaSelect<ExtArgs> | null;
    omit?: Prisma.ConvocatoriaAuxiliaturaOmit<ExtArgs> | null;
    where: Prisma.ConvocatoriaAuxiliaturaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConvocatoriaAuxiliaturaCreateInput, Prisma.ConvocatoriaAuxiliaturaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ConvocatoriaAuxiliaturaUpdateInput, Prisma.ConvocatoriaAuxiliaturaUncheckedUpdateInput>;
};
export type ConvocatoriaAuxiliaturaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvocatoriaAuxiliaturaSelect<ExtArgs> | null;
    omit?: Prisma.ConvocatoriaAuxiliaturaOmit<ExtArgs> | null;
    where: Prisma.ConvocatoriaAuxiliaturaWhereUniqueInput;
};
export type ConvocatoriaAuxiliaturaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConvocatoriaAuxiliaturaWhereInput;
    limit?: number;
};
export type ConvocatoriaAuxiliaturaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvocatoriaAuxiliaturaSelect<ExtArgs> | null;
    omit?: Prisma.ConvocatoriaAuxiliaturaOmit<ExtArgs> | null;
};
