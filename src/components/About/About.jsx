import "./About.css";
import { Leaf, Users, Award, Factory } from "lucide-react";
import logo from "../../assets/images/logo.png";

const stats = [
  { icon: <Factory size={26} />, value: "12+", label: "Years in Business" },
  { icon: <Users size={26} />, value: "50,000+", label: "Happy Customers" },
  { icon: <Award size={26} />, value: "15", label: "Products in Range" },
  { icon: <Leaf size={26} />, value: "100%", label: "Energy Efficient Focus" },
];

function About() {
  return (
    <section className="about-section py-5" id="about">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <img src={logo} alt="Fanimation showroom" className="about-image" />
          </div>
          <div className="col-lg-6">
            <h4 className="section-title mb-3">About Fanimation</h4>
            <p className="about-text">
              Fanimation started with a simple idea: cooling your home shouldn't
              cost the earth, in electricity bills or in comfort. From ceiling
              fans to compact exhaust units, every product we sell is chosen
              for quiet performance, dependable build quality, and a design
              that actually fits modern spaces.
            </p>
            <p className="about-text">
              We work directly with manufacturers to keep prices honest, back
              every purchase with a real warranty, and support customers long
              after checkout &mdash; not just until the sale closes.
            </p>

            <div className="about-stats">
              {stats.map((stat) => (
                <div className="about-stat" key={stat.label}>
                  <div className="about-stat-icon">{stat.icon}</div>
                  <div>
                    <h5>{stat.value}</h5>
                    <p>{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
