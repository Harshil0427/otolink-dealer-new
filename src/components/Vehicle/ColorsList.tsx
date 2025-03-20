import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./VehicleList.css";
import { faEdit, faSave, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header";
import Sidebar from "../Sidebar";
import "./ColorList.css";

// interface Color {
//   id: number;
//   name: string;
//   image?: string;
//   colorCode?: string;
// }

const ColorList = () => {
  const nagivate = useNavigate();
  const [editingColorId, setEditingColorId] = useState<number | null>(null);
  const [editableColor, setEditableColor] = useState<any>(null);
  const [colors, setColors] = useState([
    {
      id: 384,
      name: "Mercedes Blue",
      image: "/path-to-image",
    },
    {
      id: 385,
      name: "Orange",
      image: "#FF4500",
    },
    {
      id: 386,
      name: "Red",
      image: "#FF0000",
    },
  ]);

  // const handleDelete = (id: number) => {
  //   setColors(colors.filter((color) => color.id !== id));
  // };

  const handleDelete = (item: any) => {
    setColors((prevColors) =>
      prevColors.filter((color) => color.id !== item.id)
    );
  };

  const handleEdit = (color: any) => {
    setEditingColorId(color.id);
    setEditableColor({ ...color });
  };

  const handleCancelEdit = () => {
    setEditingColorId(null);
    setEditableColor(null);
  };

  const handleSaveEdit = () => {
    if (!editableColor) return;
    setColors((prevColors) =>
      prevColors.map((color) =>
        color.id === editableColor.id ? { ...editableColor } : color
      )
    );
    setEditingColorId(null);
    setEditableColor(null);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    if (!editableColor) return;
    setEditableColor({ ...editableColor, [field]: e.target.value });
  };

  return (
    <>
      <Header />
      <div className="container-fluids">
        <div className="flex justify-between items-center bg-blue-500 text-white p-3 rounded-t">
          <Sidebar />
          <h2>Colors</h2>
        </div>
        <div className="container mx-auto p-4">
          <button
            className="bg-blue text-blue-50 px-4 py-2 rounded shadow"
            onClick={() => nagivate("/colour/add-colour")}
          >
            Add new colour
          </button>
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">ID</th>
                <th className="py-3 px-6 text-left">Image</th>
                <th className="py-3 px-6 text-center">Name</th>
                <th className="py-3 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {colors.map((color) => (
                <tr key={color.id} className="border-b">
                  <td className="py-3 px-6">{color.id}</td>
                  <td className="py-3 px-6">
                    {color.image ? (
                      <img
                        src={color.image}
                        alt={color.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    ) : (
                      <div
                        className="w-16 h-16 rounded"
                        style={{ backgroundColor: color.image }}
                      ></div>
                    )}
                  </td>
                  <td>
                    {editingColorId === color.id ? (
                      <input
                        type="text"
                        value={editableColor?.name || ""}
                        onChange={(e) => handleInputChange(e, "name")}
                      />
                    ) : (
                      color.name
                    )}
                  </td>
                  {/* <td className="py-3 px-6">{color.name}</td> */}
                  {/* <td className="py-3 px-6 text-center">
                    <button className="mr-2 text-blue-500">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      onClick={() => handleDelete(color.id)}
                      className="text-red-500"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td> */}
                   <td>
                                  <div className="actions-container">
                                    {editingColorId === color.id ? (
                                      <>
                                        <button onClick={handleSaveEdit}>
                                          <FontAwesomeIcon
                                            icon={faSave}
                                            className="fa-icon save-icon"
                                          />
                                        </button>
                                        <button onClick={handleCancelEdit}>
                                          <FontAwesomeIcon
                                            icon={faTimes}
                                            className="fa-icon cancel-icon"
                                          />
                                        </button>
                                      </>
                                    ) : (
                                      <>
                                        <button onClick={() => handleEdit(color)}>
                                          <FontAwesomeIcon
                                            icon={faEdit}
                                            className="fa-icon edit-icon"
                                          />
                                        </button>
                                        <button onClick={() => handleDelete(color)}>
                                          <FontAwesomeIcon
                                            icon={faTrash}
                                            className="fa-icon delete-icon"
                                          />
                                        </button>
                                      </>
                                    )}
                                  </div>
                                </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ColorList;
