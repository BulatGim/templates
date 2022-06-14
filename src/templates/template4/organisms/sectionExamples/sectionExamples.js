import './sectionExamples.scss';
import pic_col from './imgs/pic_col.svg'
import pic from './imgs/pic.svg';
import Example from './Example/Example';
export default function SectionExamples(props){
   
    const examples = [
        {id:1, text: 'НАЗВАНИЕ 1', pic: pic, pic_col: pic_col },
        {id:2, text: 'НАЗВАНИЕ 2', pic: pic, pic_col: pic_col  },
        {id:3, text: 'НАЗВАНИЕ 3', pic: pic, pic_col: pic_col  },
        {id:4, text: 'НАЗВАНИЕ 4', pic: pic, pic_col: pic_col  },
        {id:5, text: 'НАЗВАНИЕ 5', pic: pic, pic_col: pic_col  },
        {id:6, text: 'НАЗВАНИЕ 6', pic: pic, pic_col: pic_col  },
        {id:7, text: 'НАЗВАНИЕ 7', pic: pic, pic_col: pic_col  },
        {id:8, text: 'НАЗВАНИЕ 8', pic: pic, pic_col: pic_col  },
        {id:9, text: 'НАЗВАНИЕ 9', pic: pic, pic_col: pic_col  },
        {id:10, text: 'НАЗВАНИЕ 10', pic: pic, pic_col: pic_col  },
        {id:11, text: 'НАЗВАНИЕ 11', pic: pic, pic_col: pic_col  },
        { id:12,text: 'НАЗВАНИЕ 12', pic: pic, pic_col: pic_col  },
        {id:13, text: 'НАЗВАНИЕ 13', pic: pic, pic_col: pic_col  },
        {id:14, text: 'НАЗВАНИЕ 14', pic: pic, pic_col: pic_col  },
        {id:15, text: 'НАЗВАНИЕ 15', pic: pic, pic_col: pic_col  },
        {id:16, text: 'НАЗВАНИЕ 16', pic: pic, pic_col: pic_col  },
    ]
    return (
        <div className="template4SectionExamples">
                <h1 className="template4SectionExamples__title">ПРИМЕРЫ НАШИХ РАБОТ</h1>
                <div className="template4SectionExamples__container">
                    {examples.map((item) =>
                        <Example
                        key={item.id}
                        item={item}
                        open={props.open}
                        />
                    )}
                </div>
            </div>
    )
}