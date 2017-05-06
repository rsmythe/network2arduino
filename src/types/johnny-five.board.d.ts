import * as five from 'johnny-five';

//this is missing on the current d.ts file
declare module 'johnny-five'{
    interface Board{
        repl:  Repl;
    }
}