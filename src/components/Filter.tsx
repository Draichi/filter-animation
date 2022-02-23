import {Dispatch, SetStateAction} from 'react'

interface FilterProps {
    activeGenre: string;
    setActiveGenre: Dispatch<SetStateAction<string>>;
}

export default function Filter({activeGenre, setActiveGenre}: FilterProps) {
  return (
    <div className="filter-container">
      <button className={activeGenre === 'all' ? 'active' : ''} onClick={() => setActiveGenre('all')}>All</button>
      <button className={activeGenre === 'comedy' ? 'active' : ''} onClick={() => setActiveGenre('comedy')}>Comedy</button>
      <button className={activeGenre === 'action' ? 'active' : ''} onClick={() => setActiveGenre('action')}>Action</button>
    </div>
  );
}
