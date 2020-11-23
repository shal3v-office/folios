import { User } from './user';
import {CoverImg} from './CoverImg'
export class Project{
    public title?: string;
    public type?: string;
    public created?:Date;
    public updated?:Date;
    public description?: string;
    public owner?: User[];
    public status?: string;
    public file_url?: string;
    public file_format?: string;
    public file_size?: number;
    public cover_img?:CoverImg;
    //public team:Team;
    // tags:Tag[];
}