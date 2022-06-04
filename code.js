jsDesign.showUI(__html__)

jsDesign.ui.onmessage = msg => {
    console.log('msg', msg)
    if (msg.type === 'randomColor') {
        const { selection } = jsDesign.currentPage
        if (!selection.length) {
            jsDesign.notify('请选择图层')
            return
        }
        for (let node of selection) {
            if (node.fills) {
                node.fills = [
                    {
                        type: "SOLID",
                        color: {
                            r: Math.random(),
                            g: Math.random(),
                            b: Math.random(),
                        },
                    }
                ]
            }
        }
    }
}
