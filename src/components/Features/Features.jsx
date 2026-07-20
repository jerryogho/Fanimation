import { Leaf, Globe, Palette, ShieldCheck } from "lucide-react"
import "./Features.css"
function Features() {
const features =[
{
    icon: <Leaf size={28} />,
    title: "Energy Efficient",
},
{
    icon: <Globe size={28} />,
    title: "Global Quality",
},
{
    icon: <Palette size={28} />,
    title: "Modern Designs",
},
{
    icon: <ShieldCheck size={28} />,
    title: "2 Year Warranty",
}
]
  return (
    <section className="features">
        <div className="container">
            <div className="row">
                {features.map((item, index)=>(
                    <div key={index} className="col-lg-3 col-md-6 mt-1">
                        <div className="feature-card">
                            <div className="feature-icon">{item.icon}</div>
                            <div className="feature-info">
                               <h5>{item.title}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Features