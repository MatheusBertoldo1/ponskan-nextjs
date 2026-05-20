"use client"

import * as React from "react"
import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable, type ColumnDef, } from "@tanstack/react-table"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { requestAllAnalysis } from "@/services/requestData"

// 1. Definição simples das colunas (Exemplo com ID e Título)
const columns: ColumnDef<any>[] = [
    {
        accessorKey: "id",
        header: "Id",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "imagesCount",
        header: "Imagens",
    },
    {
        accessorKey: "classificacao.classe",
        header: "Doença",
    },
    {
        accessorKey: "classificacao.confianca",
        header: "Confiança",
    },
    {
        accessorKey: "classificacao.tempo_execucao",
        header: "Tempo de execução",
    },
    {
        accessorKey: "classificacao.createdAt",
        header: "Data",
    },
]

export function DataTable() {
    const [data, setData] = React.useState<any[]>([])
    const [loading, setLoading] = React.useState(true)

    // Estado apenas para controlar o índice da página (começa na 0)
    const [pagination, setPagination] = React.useState({
        pageIndex: 0,
        pageSize: 20, // <--- NÚMERO FIXO DE ELEMENTOS POR TELA
    })

    React.useEffect(() => {
        async function carregarDadosDaAPI() {
            try {
                const response = await requestAllAnalysis(pagination.pageIndex > 0 ? pagination.pageIndex : 1)
                const res = response.data

                // Salvando dados pegos da API
                setData(response.data || []) 
            } catch (error) {
                console.error("Erro ao buscar dados da API:", error)
            } finally {
                setLoading(false)
            }
        }
        carregarDadosDaAPI()
    }, [])

    const table = useReactTable({
        data,
        columns,
        state: {
            pagination,
        },
        onPaginationChange: setPagination,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(), // Garante a quebra de páginas
    })

    return (
        <div className="flex flex-col gap-4 w-full">
            {/* 2. Renderização da Tabela */}
            <div className="rounded-md border overflow-hidden">
                <Table className="">
                    <TableHeader >
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow className="bg-muted" key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead className="text-muted-foreground" key={header.id}>
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow className="bg-primary-foreground" key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    Nenhum resultado encontrado.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* 3. Controles Simples de Paginação */}
            <div className="flex items-center justify-end gap-4 px-2">
                <div className="text-sm font-medium">
                    Página {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="size-8"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <ChevronLeft className="size-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="size-8"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        <ChevronRight className="size-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
}