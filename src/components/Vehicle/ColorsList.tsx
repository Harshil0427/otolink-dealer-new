import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header";
import Sidebar from "../Sidebar";

interface Color {
  id: number;
  name: string;
  image?: string;
  colorCode?: string;
}

const ColorList = () => {
  const [colors, setColors] = useState<Color[]>([
    { id: 384, name: "Mercedes Blue", image: "/path-to-image.jpg" },
    { id: 383, name: "Orange", colorCode: "#FF4500" },
    { id: 382, name: "Blue", colorCode: "#0000FF" },
  ]);

  const handleDelete = (id: number) => {
    setColors(colors.filter((color) => color.id !== id));
  };

  return (
    <>
    <Header />
    <div className="container-fluids">
      <Sidebar />
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center bg-blue-500 text-white p-3 rounded-t">
        <h2 className="text-lg font-semibold">Colours</h2>
        <button className="bg-white text-blue-500 px-4 py-2 rounded shadow">
          Add new colour
        </button>
      </div>

      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md mt-4">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">ID</th>
            <th className="py-3 px-6 text-left">Image</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {colors.map((color) => (
            <tr key={color.id} className="border-b">
              <td className="py-3 px-6">{color.id}</td>
              <td className="py-3 px-6">
                {color.image ? (
                  <img src={color.image} alt={color.name} className="w-16 h-16 object-cover rounded" />
                ) : (
                  <div className="w-16 h-16 rounded" style={{ backgroundColor: color.colorCode }}></div>
                )}
              </td>
              <td className="py-3 px-6">{color.name}</td>
              <td className="py-3 px-6 text-center">
                <button className="mr-2 text-blue-500">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button onClick={() => handleDelete(color.id)} className="text-red-500">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
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
