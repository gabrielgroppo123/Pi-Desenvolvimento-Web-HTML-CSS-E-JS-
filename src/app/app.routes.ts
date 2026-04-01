import { Routes } from "@angular/router";
import { PessoaListagemComponent } from "./pages/pessoa-listagem/pessoa-listagem";
import { PessoaFormComponent } from "./pages/pessoa-form/pessoa-form.component";

export const routes: Routes= [
    {
        path: 'pessoas',
        component: PessoaListagemComponent,
        title: 'Pessoas'
    },
    {
        path: 'pessoas/incluir',
        component: PessoaFormComponent,
        title: 'Pessoa - Incluir'
    },
    {
        path: 'pessoas/alterar/:id',
        component: PessoaFormComponent,
        title: 'Pessoa - Alterar'
    },
    {
        path: 'pessoas/login',
        component: PessoaFormComponent,
        title: 'Login'
    }
]