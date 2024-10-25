import React, { Suspense, useState } from "react";
import { Box, CircularProgress, Typography, Divider, Modal, TextField, MenuItem } from "@mui/material";
import {
  Grid, Card, CardMedia, CardContent, Button, Snackbar,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import treEm from "..//Services/img/benh/chinh_nha_tre_em.jpg"
import nhaChu from "..//Services/img/benh/nha-chu.jpg"
import nuou from "..//Services/img/benh/nuou.jpg"
import tuy from "..//Services/img/benh/tuy.jpg"
import sauRang from "..//Services/img/benh/sau-rang.jpg"
import caoVoi from "..//images/pricelist/cao-voi-rang.png";



import suMy from "..//images/pricelist/su-my.jpg";

import tayRang from "..//images/pricelist/tay-trang-rang.jpg";
import trongSuot from "..//images/pricelist/trong-suot.jpg";

import danSu from "..//Services/img/dan-su/dan-su-venner.jpg";
import tramRang from "..//Services/img/tram_rang/tram-rang.jpg";
import rangThaoLap from "..//Services/img/phuc-hinh/rang-gia-thao-lap.jpg";
import thaoLap from "..//Services/img/nieng-rang/thao-lap.jpg";
import rangMacCai from "..//Services/img/nieng-rang/nieng-rang-mac-cai.jpg";
import Implant from "..//images/intro/TRIP.jpg";



const servicesDataThamMy = [
  { id: "Điều trị bệnh lý nha khoa", title: "Nha khoa trẻ em", imgSrc: treEm, link: '/nha-khoa-tre-em', price: "500.000 - 1.000.000 VNĐ/răng" },
  { id: "Điều trị bệnh lý nha khoa", title: "Điều trị nha chu", imgSrc: nhaChu, link: '/dieu-tri-nha-chu', price: "500.000 - 1.000.000 VNĐ/răng" },
  { id: "Điều trị bệnh lý nha khoa", title: "Điều trị nướu", imgSrc: nuou, link: '/dieu-tri-nuou', price: "500.000 - 1.000.000 VNĐ/răng" },
  { id: "Điều trị bệnh lý nha khoa", title: "Điều trị tủy", imgSrc: tuy, link: '/dieu-tri-tuy', price: "500.000 - 1.000.000 VNĐ/răng" },
  { id: "Điều trị bệnh lý nha khoa", title: "Điều trị sâu răng", imgSrc: sauRang, link: '/dieu-tri-sau-rang', price: "500.000 - 1.000.000 VNĐ/răng" },

  {
    id: "Niềng răng - Cải thiện khớp cắn",
    title: "Niềng răng mắc cài",
    imgSrc: rangMacCai, // Thay thế bằng đường dẫn ảnh thực tế
    link: '/nieng-rang-mac-cai', // Đường dẫn trang chi tiết
    price: "30.000.000 - 50.000.000 VNĐ/liệu trình (tùy vào tình trạng răng)"
  },
  {
    id: "Niềng răng - Cải thiện khớp cắn",
    title: "Niềng răng tháo lắp",
    imgSrc: thaoLap,
    link: '/nieng-rang-thao-lap',
    price: "5.000.000 - 8.000.000 VNĐ/hàm (tùy vào tình trạng răng)"
  },
  {
    id: "Niềng răng - Cải thiện khớp cắn",
    title: "Niềng răng trong suốt",
    imgSrc: trongSuot,
    price: "32.000.000 - 70.000.000 VNĐ/hàm (tùy vào tình trạng răng)",
    link: '/nieng-rang-trong-suot',
  },
  {
    id: "Phục hình răng đã mất",
    title: "Hàm giả tháo lắp",
    imgSrc: rangThaoLap, // Thay thế bằng đường dẫn ảnh thực tế
    link: '/ham-gia-thao-lap', // Đường dẫn trang chi tiết
    price: "800.000 - 1.000.000 VNĐ/răng (tùy vào tình trạng răng)"
  },
  {
    id: "Phục hình răng đã mất",
    title: "Cấy ghép Implant",
    imgSrc: Implant,
    link: '/cay-ghep-implant',
    price: "3.000.000 - 13.000.000 VNĐ/răng (tùy vào tình trạng răng)"
  },
  {
    id: "Phục hình răng đã mất",
    title: "Răng sứ thẩm mỹ",
    imgSrc: suMy,
    link: '/tram-rang',
    price: "800.000 - 12.000.000 VNĐ/răng (tùy vào loại sứ)"
  },
  {
    id: "Nha khoa thẩm mỹ",
    title: "Tẩy trắng răng",
    imgSrc: tayRang, // Thay thế bằng đường dẫn ảnh thực tế
    link: '/tay-trang-rang', // Đường dẫn trang chi tiết
    price: "99.000 VNĐ/hàm"
  },
  {
    id: "Nha khoa thẩm mỹ",
    title: "Dán sứ Veneer",
    imgSrc: danSu,
    link: '/dan-su-veneer',
    price: "6.000.000 VNĐ/răng"
  },
  {
    id: "Nha khoa thẩm mỹ",
    title: "Trám răng",
    imgSrc: tramRang,
    link: '/tram-rang',
    price: "99.000 VNĐ/răng"
  },
  {
    id: "Nha khoa thẩm mỹ",
    title: "Cạo vôi răng",
    imgSrc: caoVoi,
    link: '/cao-voi-rang',
    price: "99.000 VNĐ/răng"
  },

];
const ServiceGrid = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredServices, setFilteredServices] = useState(servicesDataThamMy);
  const [filter, setFilter] = useState("Tất cả"); // Thêm trạng thái lọc

  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", time: "9h",
    date: new Date().toISOString().split("T")[0],
    doctorGender: "Nam", notes: ""
  });

  const [errors, setErrors] = useState({});
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleClick = (link) => {
    navigate(link);
  };

  const handleBookingClick = (service) => {
    setSelectedService(service);
    setOpen(true);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setFilteredServices(
      category ? servicesDataThamMy.filter((service) => service.id === category) : servicesDataThamMy
    );
  };
  const handleClose = () => setOpen(false);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Vui lòng nhập họ tên";
    if (!formData.phone) newErrors.phone = "Vui lòng nhập số điện thoại";
    if (!formData.email) newErrors.email = "Vui lòng nhập email";
    if (!formData.date) newErrors.date = "Vui lòng chọn ngày";
    if (!formData.time) newErrors.date = "Vui lòng chọn thời gian";
    if (!formData.doctorGender) newErrors.date = "Vui lòng chọn bác sĩ";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBookingSubmit = () => {
    if (!validateForm()) {
      setSnackbarMessage("Vui lòng nhập đầy đủ các trường bắt buộc");
      setOpenSnackbar(true);
      return;
    }
    setSnackbarMessage("Đặt lịch thành công, vui lòng kiểm tra email sau 15 phút!");
    setOpenSnackbar(true);
    handleClose();
  };

  const handleSnackbarClose = () => setOpenSnackbar(false);

  return (
   <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", maxWidth: "100vw" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          mb: 2,
        }}
      >
        <Button variant="outlined" onClick={() => setFilteredServices(servicesDataThamMy)}>
          Tất cả
        </Button>
        <TextField
          select
          label="Chọn loại dịch vụ"
          value={selectedCategory}
          onChange={handleCategoryChange}
          sx={{ minWidth: 200 }} // Điều chỉnh độ rộng của TextField cho cân đối
        >
          {[...new Set(servicesDataThamMy.map((service) => service.id))].map((category, index) => (
            <MenuItem key={index} value={category}>
              {category}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      <Grid container spacing={3} sx={{ padding: '20px' }}>
        {filteredServices.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="250" image={service.imgSrc} alt={service.title} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {service.title}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  Giá: {service.price}
                </Typography>
                <Button variant="contained" color="error" onClick={() => handleClick(service.link)}>
                  Xem thêm
                </Button>
                <Button variant="contained" color="primary" onClick={() => handleBookingClick(service)}>
                  Đặt lịch
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal form đặt lịch */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 500,
            bgcolor: "background.paper",
            borderRadius: "10px",
            boxShadow: 24,
            p: 4,
            overflow: "auto",
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Đặt lịch cho dịch vụ: {selectedService?.title}
          </Typography>

          <TextField
            label="Họ tên"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Số điện thoại"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
            sx={{ mb: 2 }}
          />

          <TextField
            label="Dịch vụ"
            value={selectedService?.title}
            fullWidth
            disabled
            sx={{ mb: 2 }}
          />

          <TextField
            label="Giá"
            value={selectedService?.price}
            fullWidth
            disabled
            sx={{ mb: 2 }}
          />

          <TextField
            label="Thời gian"
            name="time"
            select
            value={formData.time}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          >
            {[...Array(9).keys()].map((hour) => (
              <MenuItem key={hour} value={`${9 + hour}h`}>
                {9 + hour}h
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Ngày"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            error={!!errors.date}
            helperText={errors.date}
            fullWidth
            sx={{ mb: 2 }}
          />

          <TextField
            label="Giới tính bác sĩ"
            name="doctorGender"
            select
            value={formData.doctorGender}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          >
            <MenuItem value="Nam">Nam</MenuItem>
            <MenuItem value="Nữ">Nữ</MenuItem>
          </TextField>

          <TextField
            label="Ghi chú"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            sx={{ mb: 2 }}
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleBookingSubmit}
          >
            Xác nhận đặt lịch
          </Button>
        </Box>
      </Modal>

      {/* Snackbar thông báo lỗi hoặc thành công */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000} // Ẩn sau 6 giây
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }} // Hiển thị ở giữa màn hình
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarMessage.includes("thành công") ? "success" : "error"} // Thông báo lỗi hoặc thành công
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>


    </Box>
  );
};

export default ServiceGrid;
