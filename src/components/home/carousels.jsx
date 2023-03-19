import Carousel from 'react-bootstrap/Carousel';
import apex from '../../assets/images/apex.jpg';
import hire from '../../assets/images/hire.jpg';
import newcode from '../../assets/images/newcode.jpg';

import "../../App.css"

function Carousels() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={apex}
                        alt="First slide"
                        height="400px"
                    />
                    <Carousel.Caption>
                        <h3>一起成为捍卫者</h3>
                        <p>来个枪男来个指挥带我吃鸡呀！别的不会躺赢很强！</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={hire}
                        alt="Second slide"
                        height="400px"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={newcode}
                        alt="Third slide"
                        height="400px"
                    />

                    <Carousel.Caption>
                        <h3>新一代校园招聘引领者</h3>
                        <p>
                            更懂人才的数字化校招服务商
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Carousels;