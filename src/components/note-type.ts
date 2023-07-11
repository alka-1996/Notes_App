export type Priority ='high' |'medium' | 'low'


export type NoteType={
    id:string,
    text:string,
    priority:Priority
}
export enum Color{
    high='rgb(173, 177, 157)',
    medium='rgb(167,139,102)',
    low='rgb(118,109,126)'}   

export enum ColorLight{
    high='rgb(173, 177, 157)',
    medium='rgb(167,139,102)',
    low='rgb(118,109,126)'}   
export enum ColorDark{
    high='rgb(173, 177, 157)',
    medium='rgb(167,139,102)',
    low='rgb(118,109,126)'
}   