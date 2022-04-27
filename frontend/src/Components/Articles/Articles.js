import React, {Component} from "react";
import "./Articles.css";

class Articles extends Component {
    render() {
        return(
            <div className="container">
                <div className="blog">
                    <div className="article">
                        <h4>Titre de l'article</h4>

                        <div className="infos-article">
                            <p>date de publication</p>
                            <p>auteur de l'article</p>
                        </div>

                        <p className="content-article">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget feugiat justo, et egestas turpis. Morbi scelerisque est a efficitur semper. Nam aliquam, nulla pharetra pellentesque placerat, ipsum lectus mattis lacus, eget consequat elit mauris eget nulla. Quisque pellentesque nibh sed dapibus dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer condimentum congue quam id varius.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Articles;