import React, { useState } from "react";
import { User, TableColumn } from "../../../types/type";

interface DataTableProps {
  columns: TableColumn[];
  data: User[];
}

const getCellValue = (row: User, key: string): string => {
  // @ts-expect-error: Acceso dinámico permitido para renderizado de tabla
  return row[key] !== undefined && row[key] !== null ? String(row[key]) : "";
};

const typeDocumentColors: Record<string, string> = {
  CC: "bg-blue-200 text-blue-800",
  TI: "bg-green-200 text-green-800",
  CE: "bg-yellow-200 text-yellow-800",
  PP: "bg-purple-200 text-purple-800",
  RC: "bg-pink-200 text-pink-800",
  NIT: "bg-orange-200 text-orange-800",
  OTRO: "bg-gray-200 text-gray-800",
};

const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
  // Paginación
  const [page, setPage] = useState(1);
  const rowsPerPage = 9;
  const [search, setSearch] = useState("");
  const filteredData = data.filter((user) => {
    // Puedes personalizar los campos a buscar aquí
    const searchText = search.toLowerCase();
    return (
      user.nombre?.toLowerCase().includes(searchText) ||
      user.apellido?.toLowerCase().includes(searchText) ||
      user.email?.toLowerCase().includes(searchText) ||
      user.numero_documento?.toLowerCase().includes(searchText) ||
      user.type_document?.toLowerCase().includes(searchText)
    );
  });
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  // Modal de detalles
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleRowClick = (user: User) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {/* Buscador */}
      <div className="px-4 pt-4 pb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="font-bold text-lg text-gray-700">
          Total de usuarios: {filteredData.length}
        </div>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          placeholder="Buscar por nombre, apellido, email, documento..."
          className="border border-gray-300 rounded px-3 py-2 w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              {columns.map((column) => (
                <th
                  key={column.id}
                  className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedData.map((row, idx) => (
              <tr
                key={row.id}
                className="hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => handleRowClick(row)}
              >
                {/* Número de usuario en la tabla */}
                <td className="px-3 py-3 font-bold text-gray-600">
                  {(page - 1) * rowsPerPage + idx + 1}
                </td>
                {columns.map((column) => (
                  <td key={column.id} className="px-3 py-3">
                    {column.id === "mensaje" ? (
                      <span title={row.mensaje}>
                        {row.mensaje.length > 50
                          ? row.mensaje.slice(0, 47) + "..."
                          : row.mensaje}
                      </span>
                    ) : column.id === "type_document" ? (
                      <div
                        className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                          typeDocumentColors[row.type_document] ||
                          "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {row.type_document}
                      </div>
                    ) : (
                      getCellValue(row, column.id)
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal de detalles de usuario */}
      {showModal && selectedUser && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl font-bold"
              aria-label="Cerrar"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Detalles del usuario
            </h2>
            <ul className="space-y-2">
              {Object.entries(selectedUser)
                .filter(([key]) => key !== "id")
                .map(([key, value]) => {
                  const labels: Record<string, string> = {
                    nombre: "Nombre",
                    apellido: "Apellido",
                    email: "Correo electrónico",
                    telefono: "Teléfono",
                    mensaje: "Mensaje",
                    type_document: "Tipo de documento",
                    numero_documento: "Número de documento",
                    // Agrega aquí más traducciones si tu modelo tiene más campos
                  };
                  return (
                    <li key={key}>
                      <span className="font-semibold capitalize text-gray-700">
                        {labels[key] || key.replace(/_/g, " ")}:
                      </span>{" "}
                      <span className="text-gray-900">{String(value)}</span>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      )}
      {/* Paginador */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 py-4">
          <button
            onClick={handlePrev}
            disabled={page === 1}
            className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
          >
            Anterior
          </button>
          <span>
            Página {page} de {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={page === totalPages}
            className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
};

export default DataTable;
