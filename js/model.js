const model = {
    
    app: {
        currentPage: '',
    },

    // Input
    inputs: {
        
    },

    // Data
    polls: [
        {
            status: 0, //new=0, open=1, closed=2
            title: '',
            date: '',
            questions: [
                {
                    description: '',
                    choices: [
                        {
                            description: '',
                            text: false
                        },
                    ]
                }
            ],
            answers: [
                {
                    name: 'anonymous',
                    choices: 0, //0 hvis checkbox, 1 hvis text..
                    date: ''
                }
            ],
        }
    ]
}
