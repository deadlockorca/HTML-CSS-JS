CREATE DATABASE Slot9
GO USE Slot9
CREATE TABLE Product (
    MaSoSanPham VARCHAR PRIMARY KEY,
    NgaySanXuat DATE,
    TenLoaiSanPham VARCHAR,
    MaLoaiSanPham VARCHAR,
    MaSoNguoiChiuTrachNhiem INT, 
);
CREATE TABLE ProductType (
    MaLoaiSanPham VARCHAR PRIMARY KEY,
    TenLoaiSanPham VARCHAR,
);
CREATE TABLE Person (
    MaSoNguoiChiuTrachNhiem INT PRIMARY KEY,
    NguoiChiuTrachNhiem NVARCHAR,
);
CREATE TABLE ProductReceipt (
    PhieuSanPham INT PRIMARY KEY
    MaSoSanPham VARCHAR,
);
INSERT INTO Product ( MaSoSanPham, NgaySanXuat, TenLoaiSanPham, MaLoaiSanPham, MaSoNguoiChiuTrachNhiem) VALUES ('Z37 111111','2009-12-12','Z37','987688');
INSERT INTO ProductType (MaLoaiSanPham, TenLoaiSanPham) VALUES ('Z37','May Tinh Sach Tay Z37');
INSERT INTO Person (MaSoNguoiChiuTrachNhiem, NguoiChiuTrachNhiem) VALUES ('987688','Nguyen Van An');
INSERT INTO ProductReceipt (PhieuSanPham, MaSoSanPham) VALUES ('SP001','Z37 111111');


SELECT MaLoaiSanPham, TenLoaiSanPham
FROM ProductType;

SELECT Product.MaSoSanPham, NgaySanXuat, TenLoaiSanPham, NguoiChiuTrachNhiem
FROM Product
JOIN ProductType ON Product.MaLoaiSanPham = ProductType.MaLoaiSanPham
JOIN Person ON Product.MaSoNguoiChiuTrachNhiem = Person.MaSoNguoiChiuTrachNhiem

SELECT MaSoNguoiChiuTrachNhiem
FROM Person;





