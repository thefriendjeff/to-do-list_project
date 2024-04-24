import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState(["Trabalho", "Pessoal", "Estudos"]);
  const [newCategory, setNewCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!newCategory) return; // Não adiciona categorias vazias
    if (categories.includes(newCategory)) {
      alert("Categoria já existe!");
      return;
    }
    setCategories([...categories, newCategory]);
    setNewCategory(""); // Limpar o campo após adicionar
  };

  return (
    <div className="todo-form">
        <h2>Criar tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" 
              placeholder='Digite um título'
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)} >
                <option value="">Selecione uma categoria</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>{cat}</option>
                ))}
            </select>
            <input type="text"
              placeholder="Adicione uma nova categoria"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <button type="button" onClick={handleAddCategory}>Adicionar Categoria</button>
            <button type="submit">Criar tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm;
