//%block="Level Editor" blockId="levelEditor" color=#57b4ff icon="\uf044"
namespace levelEditor {
    //%block="Create Toolbar With Background Color %bgc And Items %items" blockId="createToolbar" color=#57b4ff
    export function createToolbar(bgc: color, items: Array<Image>) {
        let toolbar = sprites.create(img`
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
            1111111111111111
        `)
        toolbar.image.replace(1, bgc)
    }
} 