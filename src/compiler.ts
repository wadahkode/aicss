export function compileCSS(input: string): string {
    return input.replace(/@tw\((.*?)\)/g, (match, content) => {
        return content.split(',').map(cls => cls.trim()).join(' ');
    });
}