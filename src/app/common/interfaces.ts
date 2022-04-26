export interface Project{
    id: string,
    nombre: string,
    url: string,
    coords: string,
    size: string,
    height: string,
    with: idiomes[],
    date: idiomes[]
  }
  
  export interface idiomes{
    eng: string
    cat: string,
  }