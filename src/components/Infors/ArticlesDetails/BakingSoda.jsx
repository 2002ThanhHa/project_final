import React, { Suspense } from "react";
import { Box, CircularProgress, Divider, Typography } from "@mui/material";

const Header = React.lazy(() => import("../Header"));
const Footer = React.lazy(() => import("../Footer"));
const BookingForm = React.lazy(() => import("../BookingForm"));
import logo from "../img/baking/nen1.jpg";
import baking from "../img/baking/baking.jpg";
import baking_ban_chai from "../img/baking/baking-ban-chai.jpg";
import baking_chanh from "..//img/baking/baking-chanh.jpg";
import baking_salt from "../img/baking/baking-salt.jpg";
import baking_dau from "../img/baking/baking-dau.jpg";
import baking_kho from "../img/baking/baking-kho.jpg";
import baking_water from "../img/baking/baking-water.jpg";
import trang_rang from "../img/baking/trang-rang.jpg";
import baking_giam from "../img/baking/baking-giam.jpg";

const BakingSoda = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh", // Đảm bảo chiều cao tối thiểu của trang để Header luôn ở trên cùng
            }}
        >
            <Suspense
                fallback={
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100vh", // Full screen height for vertical centering
                            width: "100vw", // Full screen width for horizontal centering
                        }}
                    >
                        <CircularProgress
                            sx={{
                                width: { xs: "50px", sm: "70px", md: "100px" }, // Responsive width
                                height: { xs: "50px", sm: "70px", md: "100px" }, // Responsive height
                            }}
                        />
                    </Box>
                }
            >
                <Header />
                <Box
                    sx={{
                        justifyContent: "center",
                        alignItems: { xs: "flex-start", sm: "flex-start", md: "center" },
                        height: "auto",
                        width: "100vw",
                    }}
                >


                    <Typography
                        sx={{
                            color: 'blue',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            fontSize: { xs: '24px', sm: '32px' },
                        }}
                    >
                        Cách sử dụng baking soda làm trắng răng hiệu quả tại nhà
                    </Typography>
                    <Box
                        component="img"
                        src={logo} // Replace with your logo image path
                        alt="Logo"
                        sx={{
                            width: { xs: "3rem", sm: "3.5rem", md: "4.5rem" }, // Adjust logo size
                            marginRight: { xs: "0.5rem", sm: "1rem" },
                        }}
                        style={{ height: 400, width: 800, objectFit: "cover", marginLeft: 350, marginTop: 15 }}
                    />
                    {/* Muc luc */}
                    <nav style={{ margin: '20px' }}>
                        <Typography
                            sx={{
                                color: 'red',
                                fontWeight: 'bold',
                                marginTop: '30px',
                                fontSize: { xs: '18px', sm: '24px' },
                            }}
                        >
                            Mục lục
                        </Typography>
                        <ul>
                            <li><a href="#baking-soda">I. Baking Soda là gì?</a></li>
                            <li><a href="#ways">II. Các cách làm trắng răng bằng Baking Soda</a></li>
                            <li><a href="#pros-cons">III. Ưu điểm và hạn chế của việc dùng Baking Soda làm trắng răng</a></li>
                            <li><a href="#notes">IV. Lưu ý khi sử dụng Baking Soda làm trắng răng</a></li>
                        </ul>
                    </nav>
                    {/* Bai viet */}
                    <Box style={{ marginLeft: '100px', marginRight: '50px' }} >
                        <section id="baking-soda">
                            <Typography
                                sx={{
                                    color: 'red',
                                    fontWeight: 'bold',
                                    marginTop: '30px',
                                    fontSize: { xs: '18px', sm: '24px' },
                                }}
                            >
                                I. Baking Soda là gì?
                            </Typography>
                            <Typography>
                                Baking soda hay Natri bicacbonat (NaHCO₃), là một loại muối hóa học tồn tại dưới dạng bột mịn, màu trắng, vị mặn, và dễ tan trong nước. Đây là nguyên liệu quen thuộc trong bếp ăn gia đình, thường được sử dụng để làm nở bánh.
                                <br />
                                Tuy nhiên, baking soda còn nổi tiếng với nhiều công dụng trong làm đẹp và chăm sóc cá nhân, đặc biệt là làm trắng răng.
                            </Typography>
                            <br />
                            <Typography>
                                <b>Tính chất làm trắng của baking soda:</b><br></br>

                            </Typography>
                            <ol>
                                <li>Trung hòa axit và bảo vệ men răng: Baking soda có tính kiềm, giúp trung hòa axit trong miệng – nguyên nhân chính gây ra sâu răng và mài mòn men răng. Việc trung hòa axit giúp giảm độ nhạy cảm của răng và bảo vệ lớp men răng khỏi bị ăn mòn.</li>
                                <li>Tẩy vết ố và mảng bám: Khi hòa với nước, baking soda tạo ra một phản ứng hóa học sinh ra các gốc tự do. Những gốc tự do này hoạt động như chất tẩy tự nhiên, giúp đánh bật các vết ố và mảng bám tích tụ trên bề mặt răng mà không làm hại men răng.</li>
                                <li>Đặc tính mài mòn nhẹ: Baking soda có khả năng mài mòn nhẹ nhưng đủ để làm sạch răng, giúp răng trông trắng sáng hơn chỉ sau vài lần sử dụng.</li>

                            </ol>
                            <Typography>Ngoài khả năng làm trắng răng, baking soda còn có nhiều công dụng khác như trị mụn đầu đen, làm đẹp da, nấu ăn, tẩy rửa, khử mùi cơ thể và hỗ trợ điều trị các vết côn trùng cắn.</Typography>
                            <Box
                                component="img"
                                src={baking} // Replace with your logo image path
                                alt="Baking"
                                sx={{
                                    width: { xs: "3rem", sm: "3.5rem", md: "4.5rem" }, // Adjust logo size
                                    marginRight: { xs: "0.5rem", sm: "1rem" },
                                }}
                                style={{ height: 400, width: 800, objectFit: "cover", marginLeft: 350, marginTop: 15 }}
                            />
                        </section>

                        <section id="ways">
                            <Typography
                                sx={{
                                    color: 'red',
                                    fontWeight: 'bold',
                                    marginTop: '30px',
                                    fontSize: { xs: '18px', sm: '24px' },
                                }}
                            >
                                II. Các cách làm trắng răng bằng Baking Soda
                            </Typography>
                            <Typography> Dưới đây là hướng dẫn chi tiết nhất từng bước để sử dụng baking soda làm trắng răng tại nhà, kèm theo các mẹo nhỏ và lưu ý quan trọng trong quá trình thực hiện:</Typography>
                            <Box >
                                <Typography
                                    sx={{
                                        color: 'red',
                                        fontWeight: 'bold',
                                        marginTop: '20px',
                                        fontSize: { xs: '16px', sm: '20px' },
                                    }}
                                >
                                    1. Sử dụng Baking Soda đơn lẻ
                                </Typography>
                                <Box>
                                    <Typography
                                        sx={{
                                            color: 'red',
                                            fontWeight: 'bold',
                                            marginTop: '10px',
                                            fontSize: { xs: '16px', sm: '20px' },
                                        }}
                                    >
                                        1.1 Baking Soda với nước
                                    </Typography>
                                    <br></br>
                                    <Typography><b> Chuẩn bị: </b> </Typography>
                                    <ul>
                                        <li>1 Thìa cà phê baking soda</li>
                                        <li>Bàn chải đánh răng mềm</li>
                                        <li>Một ít nước sạch</li>
                                    </ul>
                                    <Typography><b> Các bước thực hiện: </b> </Typography>
                                    <ol>
                                        <li><b>Rửa sạch bàn chải:</b> Đảm bảo bàn chải đã được làm sạch và làm ướt nhẹ bằng nước sạch.</li>
                                        <li><b>Nhúng vào baking soda: </b>Nhúng bàn chải vào bột baking soda, lắc nhẹ để bột bám đều vào các lông bàn chải.</li>
                                        <li><b>Chải răng nhẹ nhàng:</b> Chải răng theo chuyển động tròn nhẹ nhàng, bắt đầu từ các răng cửa rồi di chuyển sang răng hàm, tập trung vào những vùng có vết ố vàng</li>
                                        <li><b>Thời gian chải: </b>Chải trong khoảng 2 phút. Đừng chà quá mạnh để tránh làm mòn men răng.</li>
                                        <li><b>Súc miệng sạch:</b> Sau khi chải xong, súc miệng thật kỹ với nước sạch để loại bỏ hoàn toàn baking soda khỏi miệng.</li>
                                        <li><b>Kiểm tra răng: </b>Kiểm tra xem có cặn baking soda còn sót lại hay không, nếu có, súc miệng thêm lần nữa.</li>

                                    </ol>


                                    <Typography><b>Mẹo nhỏ:</b></Typography>
                                    <ul>
                                        <li>Sử dụng bàn chải mềm để tránh gây tổn thương cho nướu.</li>
                                        <li>Không dùng bàn chải cũ để tránh vi khuẩn xâm nhập vào răng miệng.</li>

                                    </ul>
                                    <Box
                                        component="img"
                                        src={baking_water} // Replace with your logo image path
                                        alt="baking-water"
                                        sx={{
                                            width: { xs: "3rem", sm: "3.5rem", md: "4.5rem" }, // Adjust logo size
                                            marginRight: { xs: "0.5rem", sm: "1rem" },
                                        }}
                                        style={{ height: 400, width: 800, objectFit: "cover", marginLeft: 350, marginTop: 15 }}
                                    />
                                    {/* <Typography><b></b></Typography>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul> */}
                                </Box>
                            </Box>
                            <Typography
                                sx={{
                                    color: 'red',
                                    fontWeight: 'bold',
                                    marginTop: '20px',
                                    fontSize: { xs: '16px', sm: '20px' },
                                }}
                            >
                                2. Kết hợp Baking Soda với nguyên liệu khác
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'red',
                                    fontWeight: 'bold',
                                    marginTop: '10px',
                                    fontSize: { xs: '16px', sm: '20px' },
                                }}
                            >
                                1.1 Baking Soda với nước
                            </Typography>
                            <Typography>
                                Chuẩn bị: 1 Thìa cà phê baking soda, Bàn chải đánh răng mềm, Một ít nước sạch...
                            </Typography>
                            {/* Thêm nội dung chi tiết */}
                        </section>

                        <section id="pros-cons">
                            <Typography
                                sx={{
                                    color: 'red',
                                    fontWeight: 'bold',
                                    marginTop: '30px',
                                    fontSize: { xs: '18px', sm: '24px' },
                                }}
                            >
                                III. Ưu điểm và hạn chế của việc dùng Baking Soda làm trắng răng
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'red',
                                    fontWeight: 'bold',
                                    marginTop: '20px',
                                    fontSize: { xs: '16px', sm: '20px' },
                                }}
                            >
                                1. Ưu điểm:
                            </Typography>
                            <Typography>
                                Nguyên liệu dễ kiếm: Baking soda là sản phẩm phổ biến, dễ tìm thấy...
                            </Typography>
                            {/* Thêm nội dung chi tiết */}
                        </section>

                        <section id="notes">
                            <Typography
                                sx={{
                                    color: 'red',
                                    fontWeight: 'bold',
                                    marginTop: '30px',
                                    fontSize: { xs: '18px', sm: '24px' },
                                }}
                            >
                                IV. Lưu ý khi sử dụng Baking Soda làm trắng răng
                            </Typography>
                            <Typography>
                                Tần suất sử dụng: Chỉ nên sử dụng baking soda tối đa 2 lần/tuần để tránh gây mòn men răng...
                            </Typography>
                            {/* Thêm nội dung chi tiết */}
                        </section>
                    </Box>

                </Box>
                <Box
                    sx={{
                        width: { xs: "100vw", sm: "100vw", md: "100vw" },
                        mt: "1rem",
                        mb: "1rem",
                    }}
                >
                    <Divider
                        sx={{
                            borderBottomWidth: 1,
                            borderColor: "#000",
                            width: { xs: "30%", sm: "50%", md: "70%" },
                            margin: "0 auto",
                        }}
                    />
                </Box>
                <Suspense
                    fallback={
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100vh", // Full screen height for vertical centering
                                width: "100vw", // Full screen width for horizontal centering
                            }}
                        >
                            <CircularProgress
                                sx={{
                                    width: { xs: "50px", sm: "70px", md: "100px" }, // Responsive width
                                    height: { xs: "50px", sm: "70px", md: "100px" }, // Responsive height
                                }}
                            />
                        </Box>
                    }
                >
                    <BookingForm />
                </Suspense>
                <Suspense
                    fallback={
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100vh", // Full screen height for vertical centering
                                width: "100vw", // Full screen width for horizontal centering
                            }}
                        >
                            <CircularProgress
                                sx={{
                                    width: { xs: "50px", sm: "70px", md: "100px" }, // Responsive width
                                    height: { xs: "50px", sm: "70px", md: "100px" }, // Responsive height
                                }}
                            />
                        </Box>
                    }
                >
                    <Footer />
                </Suspense>
            </Suspense>
        </Box>
    );
};
export default BakingSoda;


