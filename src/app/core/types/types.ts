export interface Pessoa{
  id?: number;
  nome: string;
  sobrenome: string;
  dtNascimento: string;
}

//conteúdo do DB.JSON
/*
 {
      "id": "1",
      "nome": "Enzo",
      "sobrenome": "Silva e Souza",
      "dtNascimento": "2005-01-10"
    },
    {
      "id": "2",
      "nome": "Valentina",
      "sobrenome": "Guimaraes",
      "dtNascimento": "2007-08-14"
    },
    {
      "id": "3",
      "nome": "Marcela",
      "sobrenome": "Guimaraes",
      "dtNascimento": "2000-08-14"
    },
    {
      "id": "4",
      "nome": "Marcio",
      "sobrenome": "Silva",
      "dtNascimento": "2001-08-14"
    }
  ],
  */