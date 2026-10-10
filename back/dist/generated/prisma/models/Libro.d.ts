import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type LibroModel = runtime.Types.Result.DefaultSelection<Prisma.$LibroPayload>;
export type AggregateLibro = {
    _count: LibroCountAggregateOutputType | null;
    _avg: LibroAvgAggregateOutputType | null;
    _sum: LibroSumAggregateOutputType | null;
    _min: LibroMinAggregateOutputType | null;
    _max: LibroMaxAggregateOutputType | null;
};
export type LibroAvgAggregateOutputType = {
    id: number | null;
    idAutor: number | null;
};
export type LibroSumAggregateOutputType = {
    id: number | null;
    idAutor: number | null;
};
export type LibroMinAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    editor: string | null;
    descripcionFisica: string | null;
    codigoIsbn: string | null;
    calificacionDewey: string | null;
    temas: string | null;
    link: string | null;
    idAutor: number | null;
};
export type LibroMaxAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    editor: string | null;
    descripcionFisica: string | null;
    codigoIsbn: string | null;
    calificacionDewey: string | null;
    temas: string | null;
    link: string | null;
    idAutor: number | null;
};
export type LibroCountAggregateOutputType = {
    id: number;
    titulo: number;
    editor: number;
    descripcionFisica: number;
    codigoIsbn: number;
    calificacionDewey: number;
    temas: number;
    link: number;
    idAutor: number;
    _all: number;
};
export type LibroAvgAggregateInputType = {
    id?: true;
    idAutor?: true;
};
export type LibroSumAggregateInputType = {
    id?: true;
    idAutor?: true;
};
export type LibroMinAggregateInputType = {
    id?: true;
    titulo?: true;
    editor?: true;
    descripcionFisica?: true;
    codigoIsbn?: true;
    calificacionDewey?: true;
    temas?: true;
    link?: true;
    idAutor?: true;
};
export type LibroMaxAggregateInputType = {
    id?: true;
    titulo?: true;
    editor?: true;
    descripcionFisica?: true;
    codigoIsbn?: true;
    calificacionDewey?: true;
    temas?: true;
    link?: true;
    idAutor?: true;
};
export type LibroCountAggregateInputType = {
    id?: true;
    titulo?: true;
    editor?: true;
    descripcionFisica?: true;
    codigoIsbn?: true;
    calificacionDewey?: true;
    temas?: true;
    link?: true;
    idAutor?: true;
    _all?: true;
};
export type LibroAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LibroWhereInput;
    orderBy?: Prisma.LibroOrderByWithRelationInput | Prisma.LibroOrderByWithRelationInput[];
    cursor?: Prisma.LibroWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LibroCountAggregateInputType;
    _avg?: LibroAvgAggregateInputType;
    _sum?: LibroSumAggregateInputType;
    _min?: LibroMinAggregateInputType;
    _max?: LibroMaxAggregateInputType;
};
export type GetLibroAggregateType<T extends LibroAggregateArgs> = {
    [P in keyof T & keyof AggregateLibro]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLibro[P]> : Prisma.GetScalarType<T[P], AggregateLibro[P]>;
};
export type LibroGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LibroWhereInput;
    orderBy?: Prisma.LibroOrderByWithAggregationInput | Prisma.LibroOrderByWithAggregationInput[];
    by: Prisma.LibroScalarFieldEnum[] | Prisma.LibroScalarFieldEnum;
    having?: Prisma.LibroScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LibroCountAggregateInputType | true;
    _avg?: LibroAvgAggregateInputType;
    _sum?: LibroSumAggregateInputType;
    _min?: LibroMinAggregateInputType;
    _max?: LibroMaxAggregateInputType;
};
export type LibroGroupByOutputType = {
    id: number;
    titulo: string | null;
    editor: string | null;
    descripcionFisica: string | null;
    codigoIsbn: string | null;
    calificacionDewey: string | null;
    temas: string | null;
    link: string | null;
    idAutor: number | null;
    _count: LibroCountAggregateOutputType | null;
    _avg: LibroAvgAggregateOutputType | null;
    _sum: LibroSumAggregateOutputType | null;
    _min: LibroMinAggregateOutputType | null;
    _max: LibroMaxAggregateOutputType | null;
};
export type GetLibroGroupByPayload<T extends LibroGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LibroGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LibroGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LibroGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LibroGroupByOutputType[P]>;
}>>;
export type LibroWhereInput = {
    AND?: Prisma.LibroWhereInput | Prisma.LibroWhereInput[];
    OR?: Prisma.LibroWhereInput[];
    NOT?: Prisma.LibroWhereInput | Prisma.LibroWhereInput[];
    id?: Prisma.IntFilter<"Libro"> | number;
    titulo?: Prisma.StringNullableFilter<"Libro"> | string | null;
    editor?: Prisma.StringNullableFilter<"Libro"> | string | null;
    descripcionFisica?: Prisma.StringNullableFilter<"Libro"> | string | null;
    codigoIsbn?: Prisma.StringNullableFilter<"Libro"> | string | null;
    calificacionDewey?: Prisma.StringNullableFilter<"Libro"> | string | null;
    temas?: Prisma.StringNullableFilter<"Libro"> | string | null;
    link?: Prisma.StringNullableFilter<"Libro"> | string | null;
    idAutor?: Prisma.IntNullableFilter<"Libro"> | number | null;
    autorRel?: Prisma.XOR<Prisma.AutorNullableScalarRelationFilter, Prisma.AutorWhereInput> | null;
};
export type LibroOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrderInput | Prisma.SortOrder;
    editor?: Prisma.SortOrderInput | Prisma.SortOrder;
    descripcionFisica?: Prisma.SortOrderInput | Prisma.SortOrder;
    codigoIsbn?: Prisma.SortOrderInput | Prisma.SortOrder;
    calificacionDewey?: Prisma.SortOrderInput | Prisma.SortOrder;
    temas?: Prisma.SortOrderInput | Prisma.SortOrder;
    link?: Prisma.SortOrderInput | Prisma.SortOrder;
    idAutor?: Prisma.SortOrderInput | Prisma.SortOrder;
    autorRel?: Prisma.AutorOrderByWithRelationInput;
};
export type LibroWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.LibroWhereInput | Prisma.LibroWhereInput[];
    OR?: Prisma.LibroWhereInput[];
    NOT?: Prisma.LibroWhereInput | Prisma.LibroWhereInput[];
    titulo?: Prisma.StringNullableFilter<"Libro"> | string | null;
    editor?: Prisma.StringNullableFilter<"Libro"> | string | null;
    descripcionFisica?: Prisma.StringNullableFilter<"Libro"> | string | null;
    codigoIsbn?: Prisma.StringNullableFilter<"Libro"> | string | null;
    calificacionDewey?: Prisma.StringNullableFilter<"Libro"> | string | null;
    temas?: Prisma.StringNullableFilter<"Libro"> | string | null;
    link?: Prisma.StringNullableFilter<"Libro"> | string | null;
    idAutor?: Prisma.IntNullableFilter<"Libro"> | number | null;
    autorRel?: Prisma.XOR<Prisma.AutorNullableScalarRelationFilter, Prisma.AutorWhereInput> | null;
}, "id">;
export type LibroOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrderInput | Prisma.SortOrder;
    editor?: Prisma.SortOrderInput | Prisma.SortOrder;
    descripcionFisica?: Prisma.SortOrderInput | Prisma.SortOrder;
    codigoIsbn?: Prisma.SortOrderInput | Prisma.SortOrder;
    calificacionDewey?: Prisma.SortOrderInput | Prisma.SortOrder;
    temas?: Prisma.SortOrderInput | Prisma.SortOrder;
    link?: Prisma.SortOrderInput | Prisma.SortOrder;
    idAutor?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.LibroCountOrderByAggregateInput;
    _avg?: Prisma.LibroAvgOrderByAggregateInput;
    _max?: Prisma.LibroMaxOrderByAggregateInput;
    _min?: Prisma.LibroMinOrderByAggregateInput;
    _sum?: Prisma.LibroSumOrderByAggregateInput;
};
export type LibroScalarWhereWithAggregatesInput = {
    AND?: Prisma.LibroScalarWhereWithAggregatesInput | Prisma.LibroScalarWhereWithAggregatesInput[];
    OR?: Prisma.LibroScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LibroScalarWhereWithAggregatesInput | Prisma.LibroScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Libro"> | number;
    titulo?: Prisma.StringNullableWithAggregatesFilter<"Libro"> | string | null;
    editor?: Prisma.StringNullableWithAggregatesFilter<"Libro"> | string | null;
    descripcionFisica?: Prisma.StringNullableWithAggregatesFilter<"Libro"> | string | null;
    codigoIsbn?: Prisma.StringNullableWithAggregatesFilter<"Libro"> | string | null;
    calificacionDewey?: Prisma.StringNullableWithAggregatesFilter<"Libro"> | string | null;
    temas?: Prisma.StringNullableWithAggregatesFilter<"Libro"> | string | null;
    link?: Prisma.StringNullableWithAggregatesFilter<"Libro"> | string | null;
    idAutor?: Prisma.IntNullableWithAggregatesFilter<"Libro"> | number | null;
};
export type LibroCreateInput = {
    titulo?: string | null;
    editor?: string | null;
    descripcionFisica?: string | null;
    codigoIsbn?: string | null;
    calificacionDewey?: string | null;
    temas?: string | null;
    link?: string | null;
    autorRel?: Prisma.AutorCreateNestedOneWithoutLibrosInput;
};
export type LibroUncheckedCreateInput = {
    id?: number;
    titulo?: string | null;
    editor?: string | null;
    descripcionFisica?: string | null;
    codigoIsbn?: string | null;
    calificacionDewey?: string | null;
    temas?: string | null;
    link?: string | null;
    idAutor?: number | null;
};
export type LibroUpdateInput = {
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    editor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    descripcionFisica?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigoIsbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    calificacionDewey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    autorRel?: Prisma.AutorUpdateOneWithoutLibrosNestedInput;
};
export type LibroUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    editor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    descripcionFisica?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigoIsbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    calificacionDewey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idAutor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type LibroCreateManyInput = {
    id?: number;
    titulo?: string | null;
    editor?: string | null;
    descripcionFisica?: string | null;
    codigoIsbn?: string | null;
    calificacionDewey?: string | null;
    temas?: string | null;
    link?: string | null;
    idAutor?: number | null;
};
export type LibroUpdateManyMutationInput = {
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    editor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    descripcionFisica?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigoIsbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    calificacionDewey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type LibroUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    editor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    descripcionFisica?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigoIsbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    calificacionDewey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idAutor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type LibroListRelationFilter = {
    every?: Prisma.LibroWhereInput;
    some?: Prisma.LibroWhereInput;
    none?: Prisma.LibroWhereInput;
};
export type LibroOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LibroCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    editor?: Prisma.SortOrder;
    descripcionFisica?: Prisma.SortOrder;
    codigoIsbn?: Prisma.SortOrder;
    calificacionDewey?: Prisma.SortOrder;
    temas?: Prisma.SortOrder;
    link?: Prisma.SortOrder;
    idAutor?: Prisma.SortOrder;
};
export type LibroAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    idAutor?: Prisma.SortOrder;
};
export type LibroMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    editor?: Prisma.SortOrder;
    descripcionFisica?: Prisma.SortOrder;
    codigoIsbn?: Prisma.SortOrder;
    calificacionDewey?: Prisma.SortOrder;
    temas?: Prisma.SortOrder;
    link?: Prisma.SortOrder;
    idAutor?: Prisma.SortOrder;
};
export type LibroMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    editor?: Prisma.SortOrder;
    descripcionFisica?: Prisma.SortOrder;
    codigoIsbn?: Prisma.SortOrder;
    calificacionDewey?: Prisma.SortOrder;
    temas?: Prisma.SortOrder;
    link?: Prisma.SortOrder;
    idAutor?: Prisma.SortOrder;
};
export type LibroSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    idAutor?: Prisma.SortOrder;
};
export type LibroCreateNestedManyWithoutAutorRelInput = {
    create?: Prisma.XOR<Prisma.LibroCreateWithoutAutorRelInput, Prisma.LibroUncheckedCreateWithoutAutorRelInput> | Prisma.LibroCreateWithoutAutorRelInput[] | Prisma.LibroUncheckedCreateWithoutAutorRelInput[];
    connectOrCreate?: Prisma.LibroCreateOrConnectWithoutAutorRelInput | Prisma.LibroCreateOrConnectWithoutAutorRelInput[];
    createMany?: Prisma.LibroCreateManyAutorRelInputEnvelope;
    connect?: Prisma.LibroWhereUniqueInput | Prisma.LibroWhereUniqueInput[];
};
export type LibroUncheckedCreateNestedManyWithoutAutorRelInput = {
    create?: Prisma.XOR<Prisma.LibroCreateWithoutAutorRelInput, Prisma.LibroUncheckedCreateWithoutAutorRelInput> | Prisma.LibroCreateWithoutAutorRelInput[] | Prisma.LibroUncheckedCreateWithoutAutorRelInput[];
    connectOrCreate?: Prisma.LibroCreateOrConnectWithoutAutorRelInput | Prisma.LibroCreateOrConnectWithoutAutorRelInput[];
    createMany?: Prisma.LibroCreateManyAutorRelInputEnvelope;
    connect?: Prisma.LibroWhereUniqueInput | Prisma.LibroWhereUniqueInput[];
};
export type LibroUpdateManyWithoutAutorRelNestedInput = {
    create?: Prisma.XOR<Prisma.LibroCreateWithoutAutorRelInput, Prisma.LibroUncheckedCreateWithoutAutorRelInput> | Prisma.LibroCreateWithoutAutorRelInput[] | Prisma.LibroUncheckedCreateWithoutAutorRelInput[];
    connectOrCreate?: Prisma.LibroCreateOrConnectWithoutAutorRelInput | Prisma.LibroCreateOrConnectWithoutAutorRelInput[];
    upsert?: Prisma.LibroUpsertWithWhereUniqueWithoutAutorRelInput | Prisma.LibroUpsertWithWhereUniqueWithoutAutorRelInput[];
    createMany?: Prisma.LibroCreateManyAutorRelInputEnvelope;
    set?: Prisma.LibroWhereUniqueInput | Prisma.LibroWhereUniqueInput[];
    disconnect?: Prisma.LibroWhereUniqueInput | Prisma.LibroWhereUniqueInput[];
    delete?: Prisma.LibroWhereUniqueInput | Prisma.LibroWhereUniqueInput[];
    connect?: Prisma.LibroWhereUniqueInput | Prisma.LibroWhereUniqueInput[];
    update?: Prisma.LibroUpdateWithWhereUniqueWithoutAutorRelInput | Prisma.LibroUpdateWithWhereUniqueWithoutAutorRelInput[];
    updateMany?: Prisma.LibroUpdateManyWithWhereWithoutAutorRelInput | Prisma.LibroUpdateManyWithWhereWithoutAutorRelInput[];
    deleteMany?: Prisma.LibroScalarWhereInput | Prisma.LibroScalarWhereInput[];
};
export type LibroUncheckedUpdateManyWithoutAutorRelNestedInput = {
    create?: Prisma.XOR<Prisma.LibroCreateWithoutAutorRelInput, Prisma.LibroUncheckedCreateWithoutAutorRelInput> | Prisma.LibroCreateWithoutAutorRelInput[] | Prisma.LibroUncheckedCreateWithoutAutorRelInput[];
    connectOrCreate?: Prisma.LibroCreateOrConnectWithoutAutorRelInput | Prisma.LibroCreateOrConnectWithoutAutorRelInput[];
    upsert?: Prisma.LibroUpsertWithWhereUniqueWithoutAutorRelInput | Prisma.LibroUpsertWithWhereUniqueWithoutAutorRelInput[];
    createMany?: Prisma.LibroCreateManyAutorRelInputEnvelope;
    set?: Prisma.LibroWhereUniqueInput | Prisma.LibroWhereUniqueInput[];
    disconnect?: Prisma.LibroWhereUniqueInput | Prisma.LibroWhereUniqueInput[];
    delete?: Prisma.LibroWhereUniqueInput | Prisma.LibroWhereUniqueInput[];
    connect?: Prisma.LibroWhereUniqueInput | Prisma.LibroWhereUniqueInput[];
    update?: Prisma.LibroUpdateWithWhereUniqueWithoutAutorRelInput | Prisma.LibroUpdateWithWhereUniqueWithoutAutorRelInput[];
    updateMany?: Prisma.LibroUpdateManyWithWhereWithoutAutorRelInput | Prisma.LibroUpdateManyWithWhereWithoutAutorRelInput[];
    deleteMany?: Prisma.LibroScalarWhereInput | Prisma.LibroScalarWhereInput[];
};
export type LibroCreateWithoutAutorRelInput = {
    titulo?: string | null;
    editor?: string | null;
    descripcionFisica?: string | null;
    codigoIsbn?: string | null;
    calificacionDewey?: string | null;
    temas?: string | null;
    link?: string | null;
};
export type LibroUncheckedCreateWithoutAutorRelInput = {
    id?: number;
    titulo?: string | null;
    editor?: string | null;
    descripcionFisica?: string | null;
    codigoIsbn?: string | null;
    calificacionDewey?: string | null;
    temas?: string | null;
    link?: string | null;
};
export type LibroCreateOrConnectWithoutAutorRelInput = {
    where: Prisma.LibroWhereUniqueInput;
    create: Prisma.XOR<Prisma.LibroCreateWithoutAutorRelInput, Prisma.LibroUncheckedCreateWithoutAutorRelInput>;
};
export type LibroCreateManyAutorRelInputEnvelope = {
    data: Prisma.LibroCreateManyAutorRelInput | Prisma.LibroCreateManyAutorRelInput[];
    skipDuplicates?: boolean;
};
export type LibroUpsertWithWhereUniqueWithoutAutorRelInput = {
    where: Prisma.LibroWhereUniqueInput;
    update: Prisma.XOR<Prisma.LibroUpdateWithoutAutorRelInput, Prisma.LibroUncheckedUpdateWithoutAutorRelInput>;
    create: Prisma.XOR<Prisma.LibroCreateWithoutAutorRelInput, Prisma.LibroUncheckedCreateWithoutAutorRelInput>;
};
export type LibroUpdateWithWhereUniqueWithoutAutorRelInput = {
    where: Prisma.LibroWhereUniqueInput;
    data: Prisma.XOR<Prisma.LibroUpdateWithoutAutorRelInput, Prisma.LibroUncheckedUpdateWithoutAutorRelInput>;
};
export type LibroUpdateManyWithWhereWithoutAutorRelInput = {
    where: Prisma.LibroScalarWhereInput;
    data: Prisma.XOR<Prisma.LibroUpdateManyMutationInput, Prisma.LibroUncheckedUpdateManyWithoutAutorRelInput>;
};
export type LibroScalarWhereInput = {
    AND?: Prisma.LibroScalarWhereInput | Prisma.LibroScalarWhereInput[];
    OR?: Prisma.LibroScalarWhereInput[];
    NOT?: Prisma.LibroScalarWhereInput | Prisma.LibroScalarWhereInput[];
    id?: Prisma.IntFilter<"Libro"> | number;
    titulo?: Prisma.StringNullableFilter<"Libro"> | string | null;
    editor?: Prisma.StringNullableFilter<"Libro"> | string | null;
    descripcionFisica?: Prisma.StringNullableFilter<"Libro"> | string | null;
    codigoIsbn?: Prisma.StringNullableFilter<"Libro"> | string | null;
    calificacionDewey?: Prisma.StringNullableFilter<"Libro"> | string | null;
    temas?: Prisma.StringNullableFilter<"Libro"> | string | null;
    link?: Prisma.StringNullableFilter<"Libro"> | string | null;
    idAutor?: Prisma.IntNullableFilter<"Libro"> | number | null;
};
export type LibroCreateManyAutorRelInput = {
    id?: number;
    titulo?: string | null;
    editor?: string | null;
    descripcionFisica?: string | null;
    codigoIsbn?: string | null;
    calificacionDewey?: string | null;
    temas?: string | null;
    link?: string | null;
};
export type LibroUpdateWithoutAutorRelInput = {
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    editor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    descripcionFisica?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigoIsbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    calificacionDewey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type LibroUncheckedUpdateWithoutAutorRelInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    editor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    descripcionFisica?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigoIsbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    calificacionDewey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type LibroUncheckedUpdateManyWithoutAutorRelInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    editor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    descripcionFisica?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigoIsbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    calificacionDewey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type LibroSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    editor?: boolean;
    descripcionFisica?: boolean;
    codigoIsbn?: boolean;
    calificacionDewey?: boolean;
    temas?: boolean;
    link?: boolean;
    idAutor?: boolean;
    autorRel?: boolean | Prisma.Libro$autorRelArgs<ExtArgs>;
}, ExtArgs["result"]["libro"]>;
export type LibroSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    editor?: boolean;
    descripcionFisica?: boolean;
    codigoIsbn?: boolean;
    calificacionDewey?: boolean;
    temas?: boolean;
    link?: boolean;
    idAutor?: boolean;
    autorRel?: boolean | Prisma.Libro$autorRelArgs<ExtArgs>;
}, ExtArgs["result"]["libro"]>;
export type LibroSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    editor?: boolean;
    descripcionFisica?: boolean;
    codigoIsbn?: boolean;
    calificacionDewey?: boolean;
    temas?: boolean;
    link?: boolean;
    idAutor?: boolean;
    autorRel?: boolean | Prisma.Libro$autorRelArgs<ExtArgs>;
}, ExtArgs["result"]["libro"]>;
export type LibroSelectScalar = {
    id?: boolean;
    titulo?: boolean;
    editor?: boolean;
    descripcionFisica?: boolean;
    codigoIsbn?: boolean;
    calificacionDewey?: boolean;
    temas?: boolean;
    link?: boolean;
    idAutor?: boolean;
};
export type LibroOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "titulo" | "editor" | "descripcionFisica" | "codigoIsbn" | "calificacionDewey" | "temas" | "link" | "idAutor", ExtArgs["result"]["libro"]>;
export type LibroInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    autorRel?: boolean | Prisma.Libro$autorRelArgs<ExtArgs>;
};
export type LibroIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    autorRel?: boolean | Prisma.Libro$autorRelArgs<ExtArgs>;
};
export type LibroIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    autorRel?: boolean | Prisma.Libro$autorRelArgs<ExtArgs>;
};
export type $LibroPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Libro";
    objects: {
        autorRel: Prisma.$AutorPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        titulo: string | null;
        editor: string | null;
        descripcionFisica: string | null;
        codigoIsbn: string | null;
        calificacionDewey: string | null;
        temas: string | null;
        link: string | null;
        idAutor: number | null;
    }, ExtArgs["result"]["libro"]>;
    composites: {};
};
export type LibroGetPayload<S extends boolean | null | undefined | LibroDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LibroPayload, S>;
export type LibroCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LibroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LibroCountAggregateInputType | true;
};
export interface LibroDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Libro'];
        meta: {
            name: 'Libro';
        };
    };
    findUnique<T extends LibroFindUniqueArgs>(args: Prisma.SelectSubset<T, LibroFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LibroClient<runtime.Types.Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LibroFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LibroFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LibroClient<runtime.Types.Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LibroFindFirstArgs>(args?: Prisma.SelectSubset<T, LibroFindFirstArgs<ExtArgs>>): Prisma.Prisma__LibroClient<runtime.Types.Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LibroFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LibroFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LibroClient<runtime.Types.Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LibroFindManyArgs>(args?: Prisma.SelectSubset<T, LibroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LibroCreateArgs>(args: Prisma.SelectSubset<T, LibroCreateArgs<ExtArgs>>): Prisma.Prisma__LibroClient<runtime.Types.Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LibroCreateManyArgs>(args?: Prisma.SelectSubset<T, LibroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LibroCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LibroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LibroDeleteArgs>(args: Prisma.SelectSubset<T, LibroDeleteArgs<ExtArgs>>): Prisma.Prisma__LibroClient<runtime.Types.Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LibroUpdateArgs>(args: Prisma.SelectSubset<T, LibroUpdateArgs<ExtArgs>>): Prisma.Prisma__LibroClient<runtime.Types.Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LibroDeleteManyArgs>(args?: Prisma.SelectSubset<T, LibroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LibroUpdateManyArgs>(args: Prisma.SelectSubset<T, LibroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LibroUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LibroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LibroUpsertArgs>(args: Prisma.SelectSubset<T, LibroUpsertArgs<ExtArgs>>): Prisma.Prisma__LibroClient<runtime.Types.Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LibroCountArgs>(args?: Prisma.Subset<T, LibroCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LibroCountAggregateOutputType> : number>;
    aggregate<T extends LibroAggregateArgs>(args: Prisma.Subset<T, LibroAggregateArgs>): Prisma.PrismaPromise<GetLibroAggregateType<T>>;
    groupBy<T extends LibroGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LibroGroupByArgs['orderBy'];
    } : {
        orderBy?: LibroGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LibroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLibroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LibroFieldRefs;
}
export interface Prisma__LibroClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    autorRel<T extends Prisma.Libro$autorRelArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Libro$autorRelArgs<ExtArgs>>): Prisma.Prisma__AutorClient<runtime.Types.Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LibroFieldRefs {
    readonly id: Prisma.FieldRef<"Libro", 'Int'>;
    readonly titulo: Prisma.FieldRef<"Libro", 'String'>;
    readonly editor: Prisma.FieldRef<"Libro", 'String'>;
    readonly descripcionFisica: Prisma.FieldRef<"Libro", 'String'>;
    readonly codigoIsbn: Prisma.FieldRef<"Libro", 'String'>;
    readonly calificacionDewey: Prisma.FieldRef<"Libro", 'String'>;
    readonly temas: Prisma.FieldRef<"Libro", 'String'>;
    readonly link: Prisma.FieldRef<"Libro", 'String'>;
    readonly idAutor: Prisma.FieldRef<"Libro", 'Int'>;
}
export type LibroFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroSelect<ExtArgs> | null;
    omit?: Prisma.LibroOmit<ExtArgs> | null;
    include?: Prisma.LibroInclude<ExtArgs> | null;
    where: Prisma.LibroWhereUniqueInput;
};
export type LibroFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroSelect<ExtArgs> | null;
    omit?: Prisma.LibroOmit<ExtArgs> | null;
    include?: Prisma.LibroInclude<ExtArgs> | null;
    where: Prisma.LibroWhereUniqueInput;
};
export type LibroFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LibroFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LibroFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LibroCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroSelect<ExtArgs> | null;
    omit?: Prisma.LibroOmit<ExtArgs> | null;
    include?: Prisma.LibroInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.LibroCreateInput, Prisma.LibroUncheckedCreateInput>;
};
export type LibroCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LibroCreateManyInput | Prisma.LibroCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LibroCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LibroOmit<ExtArgs> | null;
    data: Prisma.LibroCreateManyInput | Prisma.LibroCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LibroIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LibroUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroSelect<ExtArgs> | null;
    omit?: Prisma.LibroOmit<ExtArgs> | null;
    include?: Prisma.LibroInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LibroUpdateInput, Prisma.LibroUncheckedUpdateInput>;
    where: Prisma.LibroWhereUniqueInput;
};
export type LibroUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LibroUpdateManyMutationInput, Prisma.LibroUncheckedUpdateManyInput>;
    where?: Prisma.LibroWhereInput;
    limit?: number;
};
export type LibroUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LibroOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LibroUpdateManyMutationInput, Prisma.LibroUncheckedUpdateManyInput>;
    where?: Prisma.LibroWhereInput;
    limit?: number;
    include?: Prisma.LibroIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LibroUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroSelect<ExtArgs> | null;
    omit?: Prisma.LibroOmit<ExtArgs> | null;
    include?: Prisma.LibroInclude<ExtArgs> | null;
    where: Prisma.LibroWhereUniqueInput;
    create: Prisma.XOR<Prisma.LibroCreateInput, Prisma.LibroUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LibroUpdateInput, Prisma.LibroUncheckedUpdateInput>;
};
export type LibroDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroSelect<ExtArgs> | null;
    omit?: Prisma.LibroOmit<ExtArgs> | null;
    include?: Prisma.LibroInclude<ExtArgs> | null;
    where: Prisma.LibroWhereUniqueInput;
};
export type LibroDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LibroWhereInput;
    limit?: number;
};
export type Libro$autorRelArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AutorSelect<ExtArgs> | null;
    omit?: Prisma.AutorOmit<ExtArgs> | null;
    include?: Prisma.AutorInclude<ExtArgs> | null;
    where?: Prisma.AutorWhereInput;
};
export type LibroDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroSelect<ExtArgs> | null;
    omit?: Prisma.LibroOmit<ExtArgs> | null;
    include?: Prisma.LibroInclude<ExtArgs> | null;
};
