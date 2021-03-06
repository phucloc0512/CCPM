USE [MobileStore1]
GO
/****** Object:  Table [dbo].[Admin]    Script Date: 2017-12-16 11:19:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Admin](
	[MaAdmin] [int] IDENTITY(1,1) NOT NULL,
	[Username] [nvarchar](50) NOT NULL,
	[Password] [nvarchar](50) NOT NULL,
	[Email] [nvarchar](50) NOT NULL,
	[HoTen] [nvarchar](50) NULL,
	[DiaChi] [nvarchar](50) NULL,
	[DienThoai] [varchar](11) NULL,
	[CMND] [varchar](9) NOT NULL,
	[NgaySinh] [smalldatetime] NULL,
	[GioiTinh] [bit] NULL,
	[NgayDangKy] [smalldatetime] NULL,
	[Avatar] [nvarchar](255) NULL DEFAULT ('/Content/Images/Upload/Avatar_Admin.jpg'),
	[AnHien] [bit] NOT NULL,
 CONSTRAINT [PK_Admin] PRIMARY KEY CLUSTERED 
(
	[MaAdmin] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[BinhLuan]    Script Date: 2017-12-16 11:19:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BinhLuan](
	[MaBL] [int] IDENTITY(1,1) NOT NULL,
	[TenNguoiBL] [nvarchar](50) NULL,
	[TieuDeBL] [nvarchar](50) NULL,
	[NoiDungBL] [ntext] NULL,
	[NgayBL] [smalldatetime] NULL,
	[MaKH] [int] NULL,
	[MaSP] [int] NULL,
	[AnHien] [bit] NOT NULL,
 CONSTRAINT [PK_BinhLuan] PRIMARY KEY CLUSTERED 
(
	[MaBL] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[CT_DonHang]    Script Date: 2017-12-16 11:19:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CT_DonHang](
	[MaCTDH] [int] IDENTITY(1,1) NOT NULL,
	[MaDH] [int] NULL,
	[MaSP] [int] NULL,
	[SoLuong] [int] NULL,
	[Gia] [decimal](18, 0) NULL,
	[Thanhtien] [decimal](18, 0) NULL,
 CONSTRAINT [PK_CT_DonHang] PRIMARY KEY CLUSTERED 
(
	[MaCTDH] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[DonHang]    Script Date: 2017-12-16 11:19:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[DonHang](
	[MaDH] [int] IDENTITY(1,1) NOT NULL,
	[MaKH] [int] NULL,
	[NgayMua] [smalldatetime] NULL,
	[NgayGiao] [smalldatetime] NULL,
	[TenNguoiNhan] [nvarchar](50) NULL,
	[DiaChiNhan] [nvarchar](50) NULL,
	[DienThoaiNhan] [varchar](11) NULL,
	[HTThanhToan] [bit] NULL DEFAULT ((0)),
	[Trigia] [decimal](18, 0) NULL,
	[Dagiao] [bit] NULL DEFAULT ((0)),
 CONSTRAINT [PK_DonHang] PRIMARY KEY CLUSTERED 
(
	[MaDH] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[GioHang]    Script Date: 2017-12-16 11:19:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GioHang](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[MaGH] [nvarchar](max) NOT NULL,
	[MaSP] [int] NOT NULL,
	[SoLuong] [int] NULL,
	[Thanhtien] [decimal](18, 0) NULL,
	[NgayMua] [smalldatetime] NULL,
 CONSTRAINT [PK_GioHang] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[KhachHang]    Script Date: 2017-12-16 11:19:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[KhachHang](
	[MaKH] [int] IDENTITY(1,1) NOT NULL,
	[Username] [nvarchar](50) NOT NULL,
	[Password] [nvarchar](50) NOT NULL,
	[Email] [nvarchar](50) NOT NULL,
	[HoTen] [nvarchar](50) NULL,
	[DiaChi] [nvarchar](50) NULL,
	[DienThoai] [varchar](11) NULL,
	[CMND] [varchar](9) NOT NULL,
	[NgaySinh] [smalldatetime] NULL,
	[GioiTinh] [bit] NULL,
	[NgayDangKy] [smalldatetime] NULL,
	[Avatar] [nvarchar](255) NULL DEFAULT ('/Content/Images/Upload/avatar.jpg'),
	[AnHien] [bit] NOT NULL,
 CONSTRAINT [PK_KhachHang] PRIMARY KEY CLUSTERED 
(
	[MaKH] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[LienHe]    Script Date: 2017-12-16 11:19:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LienHe](
	[MaLH] [int] IDENTITY(1,1) NOT NULL,
	[MaKH] [int] NULL,
	[Avatar] [nvarchar](255) NULL,
	[TenNguoiGui] [nvarchar](200) NOT NULL,
	[NoiDung] [nvarchar](1000) NOT NULL,
	[NgayGui] [smalldatetime] NULL,
	[LuotGui] [bit] NULL,
	[DaDocKH] [bit] NULL,
	[DaDocAD] [bit] NULL,
	[Anhien] [bit] NULL,
 CONSTRAINT [PK_LienHe] PRIMARY KEY CLUSTERED 
(
	[MaLH] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Menu]    Script Date: 2017-12-16 11:19:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Menu](
	[MaMenu] [int] IDENTITY(1,1) NOT NULL,
	[TenMenu] [nvarchar](50) NULL,
	[url] [varchar](50) NULL,
	[Thutu] [int] NULL,
 CONSTRAINT [PK_Menu] PRIMARY KEY CLUSTERED 
(
	[MaMenu] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[NhaSanXuat]    Script Date: 2017-12-16 11:19:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[NhaSanXuat](
	[MaNSX] [int] IDENTITY(1,1) NOT NULL,
	[TenNSX] [nvarchar](255) NOT NULL,
	[AnHien] [bit] NOT NULL,
 CONSTRAINT [PK_NhaSanXuat] PRIMARY KEY CLUSTERED 
(
	[MaNSX] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[PhanQuyen_Admin]    Script Date: 2017-12-16 11:19:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PhanQuyen_Admin](
	[MaPQ] [int] IDENTITY(1,1) NOT NULL,
	[MaAdmin] [int] NULL,
	[PQ_Menu] [bit] NULL,
	[PQ_Slider] [bit] NULL,
	[PQ_NhaSanXuat] [bit] NULL,
	[PQ_SanPham] [bit] NULL,
	[PQ_KhachHang] [bit] NULL,
	[PQ_DonHang] [bit] NULL,
	[PQ_TinTuc] [bit] NULL,
	[PQ_QuangCao] [bit] NULL,
	[PQ_LienHe] [bit] NULL,
	[PQ_GioiThieu] [bit] NULL,
	[PQ_QuanTriAdmin] [bit] NULL,
	[PQ_SiteMap] [bit] NULL,
 CONSTRAINT [PK_PhanQuyen_Admin] PRIMARY KEY CLUSTERED 
(
	[MaPQ] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[QuangCao]    Script Date: 2017-12-16 11:19:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[QuangCao](
	[MaQC] [int] IDENTITY(1,1) NOT NULL,
	[TenQC] [nvarchar](255) NOT NULL,
	[TenCty] [nvarchar](200) NOT NULL,
	[UrlHinh] [varchar](100) NULL,
	[LinkUrl] [varchar](100) NULL,
	[vitri] [varchar](1) NOT NULL,
	[Ngaybatdau] [smalldatetime] NULL,
	[Ngayhethan] [smalldatetime] NULL,
	[AnHien] [bit] NOT NULL,
 CONSTRAINT [PK_QuangCao] PRIMARY KEY CLUSTERED 
(
	[MaQC] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[SanPham]    Script Date: 2017-12-16 11:19:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SanPham](
	[MaSP] [int] IDENTITY(1,1) NOT NULL,
	[TenSP] [nvarchar](255) NOT NULL,
	[UrlHinh] [nvarchar](255) NULL,
	[Code1] [ntext] NULL DEFAULT ('<a class="tgdd360"  data-tgdd360-options="autospin: infinite; autospin-direction: anticlockwise; autospin-start: load,click;columns:36"><img src="'),
	[UrlHinh360] [nvarchar](255) NULL,
	[Code2] [ntext] NULL DEFAULT ('" /> </a>'),
	[GiaHienTai] [decimal](18, 0) NOT NULL DEFAULT ((0)),
	[GiaCu] [decimal](18, 0) NOT NULL DEFAULT ((0)),
	[MoTa] [ntext] NULL,
	[MoTaCT] [ntext] NULL,
	[DanhGiaCT] [ntext] NULL,
	[MaNSX] [int] NOT NULL,
	[SoLuongTon] [int] NOT NULL DEFAULT ((1)),
	[SLDaBan] [int] NOT NULL DEFAULT ((0)),
	[KhuyenMai] [float] NOT NULL DEFAULT ((0)),
	[LuotXem] [int] NULL DEFAULT ((0)),
	[NgayCapNhat] [smalldatetime] NULL,
	[AnHien] [bit] NOT NULL,
 CONSTRAINT [PK_SanPham] PRIMARY KEY CLUSTERED 
(
	[MaSP] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Slider]    Script Date: 2017-12-16 11:19:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Slider](
	[MaSlider] [int] IDENTITY(1,1) NOT NULL,
	[UrlHinh] [varchar](100) NULL,
	[LinkUrl] [varchar](100) NULL,
	[Thutu] [int] NULL,
	[AnHien] [bit] NOT NULL,
 CONSTRAINT [PK_Slider] PRIMARY KEY CLUSTERED 
(
	[MaSlider] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[SoLuotTruyCap]    Script Date: 2017-12-16 11:19:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SoLuotTruyCap](
	[Dem] [int] NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ThongTin]    Script Date: 2017-12-16 11:19:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ThongTin](
	[MaTT] [int] IDENTITY(1,1) NOT NULL,
	[code1] [ntext] NULL DEFAULT ('<p id="slide-client" class="text"><strong></strong><span></span></p><script type="text/javascript">if(!window.slider) var slider={};slider.data=[{"id":"slide-img-1","client":"'),
	[GioiThieu] [ntext] NOT NULL,
	[code2] [ntext] NULL DEFAULT ('","desc":""}];</script>'),
	[sitemap] [nvarchar](255) NULL,
 CONSTRAINT [PK_ThongTin] PRIMARY KEY CLUSTERED 
(
	[MaTT] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TinTuc]    Script Date: 2017-12-16 11:19:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TinTuc](
	[MaTin] [int] IDENTITY(1,1) NOT NULL,
	[TieuDe] [nvarchar](255) NOT NULL,
	[TomTat] [nvarchar](255) NOT NULL,
	[UrlHinh] [nvarchar](255) NOT NULL,
	[NoiDung] [ntext] NOT NULL,
	[LuotXem] [int] NULL,
	[NgayCapNhat] [smalldatetime] NULL,
	[AnHien] [bit] NOT NULL,
 CONSTRAINT [PK_TinTuc] PRIMARY KEY CLUSTERED 
(
	[MaTin] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Admin] ON 

INSERT [dbo].[Admin] ([MaAdmin], [Username], [Password], [Email], [HoTen], [DiaChi], [DienThoai], [CMND], [NgaySinh], [GioiTinh], [NgayDangKy], [Avatar], [AnHien]) VALUES (1, N'admin', N'1231231', N'admin@Gmail.com', N'Lê Trần Bá Thịnh', N'123 Xóm lều', N'01659020020', N'241351483', CAST(N'1996-03-06 00:00:00' AS SmallDateTime), 1, CAST(N'2017-09-19 00:00:00' AS SmallDateTime), N'/Content/Images/Upload/thinh.jpg', 1)
INSERT [dbo].[Admin] ([MaAdmin], [Username], [Password], [Email], [HoTen], [DiaChi], [DienThoai], [CMND], [NgaySinh], [GioiTinh], [NgayDangKy], [Avatar], [AnHien]) VALUES (2, N'admin1', N'1231231', N'admin1@Gmail.com', N'Nguyễn Minh Thiện', N'123 Xóm lá', N'01688344585', N'123456789', CAST(N'1995-05-22 00:00:00' AS SmallDateTime), 1, CAST(N'2017-10-20 00:00:00' AS SmallDateTime), N'/Content/Images/Upload/thien1.jpg', 1)
SET IDENTITY_INSERT [dbo].[Admin] OFF
SET IDENTITY_INSERT [dbo].[CT_DonHang] ON 

INSERT [dbo].[CT_DonHang] ([MaCTDH], [MaDH], [MaSP], [SoLuong], [Gia], [Thanhtien]) VALUES (7, 4, 5, 1, CAST(2000000 AS Decimal(18, 0)), CAST(1800000 AS Decimal(18, 0)))
SET IDENTITY_INSERT [dbo].[CT_DonHang] OFF
SET IDENTITY_INSERT [dbo].[DonHang] ON 

INSERT [dbo].[DonHang] ([MaDH], [MaKH], [NgayMua], [NgayGiao], [TenNguoiNhan], [DiaChiNhan], [DienThoaiNhan], [HTThanhToan], [Trigia], [Dagiao]) VALUES (1, 1, CAST(N'2017-07-19 00:00:00' AS SmallDateTime), CAST(N'2017-07-20 00:00:00' AS SmallDateTime), N'Nguyễn Văn Thiện', N'123 Xóm lều', N'01659020020', 1, CAST(30472000 AS Decimal(18, 0)), 0)
INSERT [dbo].[DonHang] ([MaDH], [MaKH], [NgayMua], [NgayGiao], [TenNguoiNhan], [DiaChiNhan], [DienThoaiNhan], [HTThanhToan], [Trigia], [Dagiao]) VALUES (2, 2, CAST(N'2017-03-26 00:00:00' AS SmallDateTime), CAST(N'2017-03-30 00:00:00' AS SmallDateTime), N'Dương Thế Thịnh', N'123 Xóm lá', N'0918158670', 0, CAST(4041000 AS Decimal(18, 0)), 0)
INSERT [dbo].[DonHang] ([MaDH], [MaKH], [NgayMua], [NgayGiao], [TenNguoiNhan], [DiaChiNhan], [DienThoaiNhan], [HTThanhToan], [Trigia], [Dagiao]) VALUES (4, 1, CAST(N'2017-12-16 22:10:00' AS SmallDateTime), CAST(N'2017-12-22 00:00:00' AS SmallDateTime), N'thanh thiện', N'tây ninh', N'1234567890', 1, CAST(1800000 AS Decimal(18, 0)), 0)
SET IDENTITY_INSERT [dbo].[DonHang] OFF
SET IDENTITY_INSERT [dbo].[GioHang] ON 

INSERT [dbo].[GioHang] ([Id], [MaGH], [MaSP], [SoLuong], [Thanhtien], [NgayMua]) VALUES (1, N'62676a2d-bfce-48bf-bdfd-ee78aaee721f', 5, 1, CAST(1800000 AS Decimal(18, 0)), CAST(N'2017-12-07 21:45:00' AS SmallDateTime))
INSERT [dbo].[GioHang] ([Id], [MaGH], [MaSP], [SoLuong], [Thanhtien], [NgayMua]) VALUES (2, N'73f91fe9-20a7-465f-a1ec-660b6aca7550', 6, 1, CAST(984000 AS Decimal(18, 0)), CAST(N'2017-12-08 20:48:00' AS SmallDateTime))
SET IDENTITY_INSERT [dbo].[GioHang] OFF
SET IDENTITY_INSERT [dbo].[KhachHang] ON 

INSERT [dbo].[KhachHang] ([MaKH], [Username], [Password], [Email], [HoTen], [DiaChi], [DienThoai], [CMND], [NgaySinh], [GioiTinh], [NgayDangKy], [Avatar], [AnHien]) VALUES (1, N'ThienIT', N'123123', N'hacker.handsome.93@gmail.com', N'Nguyễn Văn Thiện', N'123 Xóm lều', N'01659020020', N'241351483', CAST(N'1996-03-06 00:00:00' AS SmallDateTime), 1, CAST(N'2017-03-04 00:00:00' AS SmallDateTime), N'/Content/Images/Upload/thien1.jpg', 1)
INSERT [dbo].[KhachHang] ([MaKH], [Username], [Password], [Email], [HoTen], [DiaChi], [DienThoai], [CMND], [NgaySinh], [GioiTinh], [NgayDangKy], [Avatar], [AnHien]) VALUES (2, N'PhetIT', N'123123', N'ThinhIT@yahoo.com', N'Dương Thế Thịnh', N'123 Xóm lá', N'0918158670', N'245475951', CAST(N'1997-10-02 00:00:00' AS SmallDateTime), 1, CAST(N'2017-03-25 00:00:00' AS SmallDateTime), N'/Content/Images/Upload/thinh.jpg', 1)
SET IDENTITY_INSERT [dbo].[KhachHang] OFF
SET IDENTITY_INSERT [dbo].[LienHe] ON 

INSERT [dbo].[LienHe] ([MaLH], [MaKH], [Avatar], [TenNguoiGui], [NoiDung], [NgayGui], [LuotGui], [DaDocKH], [DaDocAD], [Anhien]) VALUES (1, 1, N'/Content/Images/Upload/thinh.jpg', N'Đào Thị Quỳnh', N' Kính này còn hàng không Admin', CAST(N'2017-03-25 00:00:00' AS SmallDateTime), 0, 1, 1, 1)
INSERT [dbo].[LienHe] ([MaLH], [MaKH], [Avatar], [TenNguoiGui], [NoiDung], [NgayGui], [LuotGui], [DaDocKH], [DaDocAD], [Anhien]) VALUES (2, 1, N'/Content/Images/Upload/thien1.jpg', N'Đào Như Cương', N'Còn nhé bạn', CAST(N'2017-03-25 00:00:00' AS SmallDateTime), 1, 1, 1, 1)
INSERT [dbo].[LienHe] ([MaLH], [MaKH], [Avatar], [TenNguoiGui], [NoiDung], [NgayGui], [LuotGui], [DaDocKH], [DaDocAD], [Anhien]) VALUES (3, 1, N'/Content/Images/Upload/thinh.jpg', N'Đào Bá Lộc', N'Loại này ổn không thế admin', CAST(N'2017-03-25 00:00:00' AS SmallDateTime), 0, 1, 1, 1)
SET IDENTITY_INSERT [dbo].[LienHe] OFF
SET IDENTITY_INSERT [dbo].[Menu] ON 

INSERT [dbo].[Menu] ([MaMenu], [TenMenu], [url], [Thutu]) VALUES (1, N'Trang chủ', N'/Home', 1)
INSERT [dbo].[Menu] ([MaMenu], [TenMenu], [url], [Thutu]) VALUES (2, N'ToYoTa', N'/Home/Producer/1', 2)
INSERT [dbo].[Menu] ([MaMenu], [TenMenu], [url], [Thutu]) VALUES (3, N'HonDa', N'/Home/Producer/2', 3)
INSERT [dbo].[Menu] ([MaMenu], [TenMenu], [url], [Thutu]) VALUES (4, N'Camry', N'/Home/Producer/3', 4)
INSERT [dbo].[Menu] ([MaMenu], [TenMenu], [url], [Thutu]) VALUES (5, N'Audi', N'/Home/Producer/4', 5)
INSERT [dbo].[Menu] ([MaMenu], [TenMenu], [url], [Thutu]) VALUES (6, N'Hyundai', N'/Home/Producer/5', 6)
INSERT [dbo].[Menu] ([MaMenu], [TenMenu], [url], [Thutu]) VALUES (7, N'Hãng khác', N'/Home/Producer/6', 7)
INSERT [dbo].[Menu] ([MaMenu], [TenMenu], [url], [Thutu]) VALUES (8, N'Khuyến mãi', N'/Home/Promotions', 8)
INSERT [dbo].[Menu] ([MaMenu], [TenMenu], [url], [Thutu]) VALUES (9, N'Tin công nghệ', N'/Home/News', 9)
INSERT [dbo].[Menu] ([MaMenu], [TenMenu], [url], [Thutu]) VALUES (10, N'Giới thiệu', N'/Home/About', 10)
INSERT [dbo].[Menu] ([MaMenu], [TenMenu], [url], [Thutu]) VALUES (11, N'Liên hệ', N'/Home/Contact', 11)
SET IDENTITY_INSERT [dbo].[Menu] OFF
SET IDENTITY_INSERT [dbo].[NhaSanXuat] ON 

INSERT [dbo].[NhaSanXuat] ([MaNSX], [TenNSX], [AnHien]) VALUES (1, N'HonDa', 1)
INSERT [dbo].[NhaSanXuat] ([MaNSX], [TenNSX], [AnHien]) VALUES (2, N'ToYoTa', 1)
INSERT [dbo].[NhaSanXuat] ([MaNSX], [TenNSX], [AnHien]) VALUES (3, N'Hyundai', 1)
INSERT [dbo].[NhaSanXuat] ([MaNSX], [TenNSX], [AnHien]) VALUES (4, N'Audi', 1)
INSERT [dbo].[NhaSanXuat] ([MaNSX], [TenNSX], [AnHien]) VALUES (5, N'PMW', 1)
INSERT [dbo].[NhaSanXuat] ([MaNSX], [TenNSX], [AnHien]) VALUES (6, N'khác', 1)
INSERT [dbo].[NhaSanXuat] ([MaNSX], [TenNSX], [AnHien]) VALUES (7, N'Pentley', 0)
INSERT [dbo].[NhaSanXuat] ([MaNSX], [TenNSX], [AnHien]) VALUES (8, N'Cadilac', 0)
INSERT [dbo].[NhaSanXuat] ([MaNSX], [TenNSX], [AnHien]) VALUES (9, N'Kia', 0)
INSERT [dbo].[NhaSanXuat] ([MaNSX], [TenNSX], [AnHien]) VALUES (10, N'Camry', 0)
INSERT [dbo].[NhaSanXuat] ([MaNSX], [TenNSX], [AnHien]) VALUES (11, N'Messidesc', 0)
INSERT [dbo].[NhaSanXuat] ([MaNSX], [TenNSX], [AnHien]) VALUES (12, N'4 chỗ', 0)
INSERT [dbo].[NhaSanXuat] ([MaNSX], [TenNSX], [AnHien]) VALUES (13, N'7 chổ', 0)
INSERT [dbo].[NhaSanXuat] ([MaNSX], [TenNSX], [AnHien]) VALUES (14, N'16 chổ', 0)
INSERT [dbo].[NhaSanXuat] ([MaNSX], [TenNSX], [AnHien]) VALUES (15, N'Xe Tải', 0)
INSERT [dbo].[NhaSanXuat] ([MaNSX], [TenNSX], [AnHien]) VALUES (16, N'Bán Tải', 0)
SET IDENTITY_INSERT [dbo].[NhaSanXuat] OFF
SET IDENTITY_INSERT [dbo].[PhanQuyen_Admin] ON 

INSERT [dbo].[PhanQuyen_Admin] ([MaPQ], [MaAdmin], [PQ_Menu], [PQ_Slider], [PQ_NhaSanXuat], [PQ_SanPham], [PQ_KhachHang], [PQ_DonHang], [PQ_TinTuc], [PQ_QuangCao], [PQ_LienHe], [PQ_GioiThieu], [PQ_QuanTriAdmin], [PQ_SiteMap]) VALUES (1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
INSERT [dbo].[PhanQuyen_Admin] ([MaPQ], [MaAdmin], [PQ_Menu], [PQ_Slider], [PQ_NhaSanXuat], [PQ_SanPham], [PQ_KhachHang], [PQ_DonHang], [PQ_TinTuc], [PQ_QuangCao], [PQ_LienHe], [PQ_GioiThieu], [PQ_QuanTriAdmin], [PQ_SiteMap]) VALUES (2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
SET IDENTITY_INSERT [dbo].[PhanQuyen_Admin] OFF
SET IDENTITY_INSERT [dbo].[QuangCao] ON 

INSERT [dbo].[QuangCao] ([MaQC], [TenQC], [TenCty], [UrlHinh], [LinkUrl], [vitri], [Ngaybatdau], [Ngayhethan], [AnHien]) VALUES (1, N'Ốp gương chiếu hậu trái', N'ToYoTa', N'/ckfinder/userfiles/files/chinhbanhlai.jpg', N'http://www.nokia.com/', N'1', CAST(N'2017-11-22 00:00:00' AS SmallDateTime), CAST(N'2017-12-22 00:00:00' AS SmallDateTime), 1)
SET IDENTITY_INSERT [dbo].[QuangCao] OFF
SET IDENTITY_INSERT [dbo].[SanPham] ON 

INSERT [dbo].[SanPham] ([MaSP], [TenSP], [UrlHinh], [Code1], [UrlHinh360], [Code2], [GiaHienTai], [GiaCu], [MoTa], [MoTaCT], [DanhGiaCT], [MaNSX], [SoLuongTon], [SLDaBan], [KhuyenMai], [LuotXem], [NgayCapNhat], [AnHien]) VALUES (3, N'Cản Sau', N'/ckfinder/userfiles/files/ban-ep.jpg', N'<a class="tgdd360"  data-tgdd360-options="autospin: infinite; autospin-direction: anticlockwise; autospin-start: load,click;columns:36"><img src="', N'/ckfinder/userfiles/files/ban-ep.jpg', N'" /> </a>', CAST(1000000 AS Decimal(18, 0)), CAST(2000000 AS Decimal(18, 0)), N'<p>hyundai</p>
', N'', N'', 2, 10, 8, 0, 4, CAST(N'2017-12-13 00:00:00' AS SmallDateTime), 1)
INSERT [dbo].[SanPham] ([MaSP], [TenSP], [UrlHinh], [Code1], [UrlHinh360], [Code2], [GiaHienTai], [GiaCu], [MoTa], [MoTaCT], [DanhGiaCT], [MaNSX], [SoLuongTon], [SLDaBan], [KhuyenMai], [LuotXem], [NgayCapNhat], [AnHien]) VALUES (4, N'Gương chiếu hậu', N'/ckfinder/userfiles/files/guong-chieu-hau-ben-trai.jpg', N'<a class="tgdd360"  data-tgdd360-options="autospin: infinite; autospin-direction: anticlockwise; autospin-start: load,click;columns:36"><img src="', N'/ckfinder/userfiles/files/anh2.jpg', N'" /> </a>', CAST(1200000 AS Decimal(18, 0)), CAST(1800000 AS Decimal(18, 0)), N'<p>mang phong c&aacute;ch v&agrave; chất lượng tuyệt vời</p>
', N'', N'', 1, 13, 4, 0, 1, CAST(N'2017-12-07 00:00:00' AS SmallDateTime), 1)
INSERT [dbo].[SanPham] ([MaSP], [TenSP], [UrlHinh], [Code1], [UrlHinh360], [Code2], [GiaHienTai], [GiaCu], [MoTa], [MoTaCT], [DanhGiaCT], [MaNSX], [SoLuongTon], [SLDaBan], [KhuyenMai], [LuotXem], [NgayCapNhat], [AnHien]) VALUES (5, N'cản trước có đèn', N'/ckfinder/userfiles/files/anh2.jpg', N'<a class="tgdd360"  data-tgdd360-options="autospin: infinite; autospin-direction: anticlockwise; autospin-start: load,click;columns:36"><img src="', N'/ckfinder/userfiles/files/anh2.jpg', N'" /> </a>', CAST(2000000 AS Decimal(18, 0)), CAST(3600000 AS Decimal(18, 0)), N'<p>honda</p>
', N'', N'', 3, 10, 2, 10, 4, CAST(N'2017-10-21 00:00:00' AS SmallDateTime), 1)
INSERT [dbo].[SanPham] ([MaSP], [TenSP], [UrlHinh], [Code1], [UrlHinh360], [Code2], [GiaHienTai], [GiaCu], [MoTa], [MoTaCT], [DanhGiaCT], [MaNSX], [SoLuongTon], [SLDaBan], [KhuyenMai], [LuotXem], [NgayCapNhat], [AnHien]) VALUES (6, N'Gương chiếu hậu', N'/ckfinder/userfiles/files/guong-chieu-hau-ben-trai.jpg', N'<a class="tgdd360"  data-tgdd360-options="autospin: infinite; autospin-direction: anticlockwise; autospin-start: load,click;columns:36"><img src="', N'/ckfinder/userfiles/files/anh2.jpg', N'" /> </a>', CAST(1230000 AS Decimal(18, 0)), CAST(1200000 AS Decimal(18, 0)), N'', N'', N'', 4, 10, 0, 20, 2, CAST(N'2017-12-07 00:00:00' AS SmallDateTime), 1)
INSERT [dbo].[SanPham] ([MaSP], [TenSP], [UrlHinh], [Code1], [UrlHinh360], [Code2], [GiaHienTai], [GiaCu], [MoTa], [MoTaCT], [DanhGiaCT], [MaNSX], [SoLuongTon], [SLDaBan], [KhuyenMai], [LuotXem], [NgayCapNhat], [AnHien]) VALUES (7, N'Phụ Tùng Xe Ô Tô', N'/ckfinder/userfiles/files/anh4.jpg', N'<a class="tgdd360"  data-tgdd360-options="autospin: infinite; autospin-direction: anticlockwise; autospin-start: load,click;columns:36"><img src="', N'', N'" /> </a>', CAST(3000000 AS Decimal(18, 0)), CAST(123000 AS Decimal(18, 0)), N'<p>rất chắc v&agrave; bền vững</p>
', N'', N'', 5, 200, 10, 0, 1, CAST(N'2017-12-08 00:00:00' AS SmallDateTime), 1)
INSERT [dbo].[SanPham] ([MaSP], [TenSP], [UrlHinh], [Code1], [UrlHinh360], [Code2], [GiaHienTai], [GiaCu], [MoTa], [MoTaCT], [DanhGiaCT], [MaNSX], [SoLuongTon], [SLDaBan], [KhuyenMai], [LuotXem], [NgayCapNhat], [AnHien]) VALUES (8, N'Kèn xe đàn hồi', N'/ckfinder/userfiles/files/anh3.jpg', N'<a class="tgdd360"  data-tgdd360-options="autospin: infinite; autospin-direction: anticlockwise; autospin-start: load,click;columns:36"><img src="', N'', N'" /> </a>', CAST(20000000 AS Decimal(18, 0)), CAST(34444444 AS Decimal(18, 0)), N'', N'', N'', 1, 10, 0, 0, 0, CAST(N'2017-12-08 00:00:00' AS SmallDateTime), 1)
INSERT [dbo].[SanPham] ([MaSP], [TenSP], [UrlHinh], [Code1], [UrlHinh360], [Code2], [GiaHienTai], [GiaCu], [MoTa], [MoTaCT], [DanhGiaCT], [MaNSX], [SoLuongTon], [SLDaBan], [KhuyenMai], [LuotXem], [NgayCapNhat], [AnHien]) VALUES (9, N'Toyota', N'/ckfinder/userfiles/files/anh2.jpg', N'<a class="tgdd360"  data-tgdd360-options="autospin: infinite; autospin-direction: anticlockwise; autospin-start: load,click;columns:36"><img src="', NULL, N'" /> </a>', CAST(12300000 AS Decimal(18, 0)), CAST(12400000 AS Decimal(18, 0)), N'<p>rất tiện dụng</p>
', NULL, NULL, 2, 20, 0, 20, 0, CAST(N'2017-12-16 00:00:00' AS SmallDateTime), 1)
SET IDENTITY_INSERT [dbo].[SanPham] OFF
SET IDENTITY_INSERT [dbo].[Slider] ON 

INSERT [dbo].[Slider] ([MaSlider], [UrlHinh], [LinkUrl], [Thutu], [AnHien]) VALUES (1, N'/ckfinder/userfiles/files/anh4.jpg', N'/Home', 1, 0)
INSERT [dbo].[Slider] ([MaSlider], [UrlHinh], [LinkUrl], [Thutu], [AnHien]) VALUES (2, N'/ckfinder/userfiles/files/anh3.jpg', N'/Home', 2, 1)
INSERT [dbo].[Slider] ([MaSlider], [UrlHinh], [LinkUrl], [Thutu], [AnHien]) VALUES (3, N'/ckfinder/userfiles/files/anh2.jpg', N'/Home', 3, 1)
INSERT [dbo].[Slider] ([MaSlider], [UrlHinh], [LinkUrl], [Thutu], [AnHien]) VALUES (4, N'/ckfinder/userfiles/files/chinhbanhlai.jpg', N'/Home', 4, 1)
INSERT [dbo].[Slider] ([MaSlider], [UrlHinh], [LinkUrl], [Thutu], [AnHien]) VALUES (5, N'/ckfinder/userfiles/files/suaxe.jpg', N'/Home', 5, 1)
SET IDENTITY_INSERT [dbo].[Slider] OFF
INSERT [dbo].[SoLuotTruyCap] ([Dem]) VALUES (0)
SET IDENTITY_INSERT [dbo].[ThongTin] ON 

INSERT [dbo].[ThongTin] ([MaTT], [code1], [GioiThieu], [code2], [sitemap]) VALUES (1, N'<p id="slide-client" class="text"><strong></strong><span></span></p><script type="text/javascript">if(!window.slider) var slider={};slider.data=[{"id":"slide-img-1","client":"', N'<p>Được thành lập từ năm 2017, chúng tôi là một trong những nhà phân phối GARA uy tín tại TP.Hồ Chí Minh và kể từ tháng 12/2017, chúng tôi chính thức trở thành nhà phân phối các mặt hàng công nghệ.</p><p>Với bề dày gần 1 tháng kinh nghiệm và uy tín đã tạo được trong những năm vừa qua, chúng tôi luôn đem lại cho khách hàng sự hài lòng và thỏa mãn với tất cả các sản phẩm của mình.</p><p>Bên cạnh đó là đội ngũ nhân viên nhiệt tình chu đáo và đầy kinh nghiệm của chúng tôi luôn đưa được ra cho khách hàng những thông tin có giá trị và giúp khách hàng lựa chọn được những sản phẩm phù hợp nhất.</p><p>Để nâng cao thương hiệu của mình, mục tiêu của chúng tôi trong thời gian tới là cung cấp đến tận tay khách hàng những sản phẩm chính hãng với chất lượng đảm bảo và uy tín cũng như giá cả hợp lý nhất.</p><p>Chúng tôi mong muốn sự đóng góp của khách hàng sẽ giúp chúng tôi ngày một phát triển để từ đó củng cố thêm lòng tin của khách hàng với chúng tôi. Chúng tôi rất biết ơn sự tin tưởng của khách hàng trong suốt gần 10 năm qua và chúng tôi luôn tâm niệm rằng cần phải cố gắng hơn nữa để xứng đáng với phương châm đề ra “Nếu những gì chúng tôi không có, nghĩa là bạn không cần” .</p><p>Chúng tôi xin chân thành cảm ơn tất cả các khách hàng đã, đang và sẽ ủng hộ chúng tôi.(Nguồn: wWw.GARA.com)</p>', N'","desc":""}];</script>', N'<iframe src="https://mapsengine.google.com/map/embed?mid=zmjDizZJBasM.k1WCrrLSNu10" width="100%" height="480" style="border:none"></iframe>')
SET IDENTITY_INSERT [dbo].[ThongTin] OFF
ALTER TABLE [dbo].[TinTuc] ADD  DEFAULT ((0)) FOR [LuotXem]
GO
ALTER TABLE [dbo].[BinhLuan]  WITH CHECK ADD  CONSTRAINT [FK_BL_KH] FOREIGN KEY([MaKH])
REFERENCES [dbo].[KhachHang] ([MaKH])
GO
ALTER TABLE [dbo].[BinhLuan] CHECK CONSTRAINT [FK_BL_KH]
GO
ALTER TABLE [dbo].[BinhLuan]  WITH CHECK ADD  CONSTRAINT [FK_BL_SP] FOREIGN KEY([MaSP])
REFERENCES [dbo].[SanPham] ([MaSP])
GO
ALTER TABLE [dbo].[BinhLuan] CHECK CONSTRAINT [FK_BL_SP]
GO
ALTER TABLE [dbo].[CT_DonHang]  WITH CHECK ADD  CONSTRAINT [FK_CT_DonHang_DonHang] FOREIGN KEY([MaDH])
REFERENCES [dbo].[DonHang] ([MaDH])
GO
ALTER TABLE [dbo].[CT_DonHang] CHECK CONSTRAINT [FK_CT_DonHang_DonHang]
GO
ALTER TABLE [dbo].[CT_DonHang]  WITH CHECK ADD  CONSTRAINT [FK_CT_DonHang_SP] FOREIGN KEY([MaSP])
REFERENCES [dbo].[SanPham] ([MaSP])
GO
ALTER TABLE [dbo].[CT_DonHang] CHECK CONSTRAINT [FK_CT_DonHang_SP]
GO
ALTER TABLE [dbo].[DonHang]  WITH CHECK ADD  CONSTRAINT [FK_DonHang_KhachHang] FOREIGN KEY([MaKH])
REFERENCES [dbo].[KhachHang] ([MaKH])
GO
ALTER TABLE [dbo].[DonHang] CHECK CONSTRAINT [FK_DonHang_KhachHang]
GO
ALTER TABLE [dbo].[GioHang]  WITH CHECK ADD  CONSTRAINT [FK_GioHang_SanPham] FOREIGN KEY([MaSP])
REFERENCES [dbo].[SanPham] ([MaSP])
GO
ALTER TABLE [dbo].[GioHang] CHECK CONSTRAINT [FK_GioHang_SanPham]
GO
ALTER TABLE [dbo].[LienHe]  WITH CHECK ADD  CONSTRAINT [FK_LH_KH] FOREIGN KEY([MaKH])
REFERENCES [dbo].[KhachHang] ([MaKH])
GO
ALTER TABLE [dbo].[LienHe] CHECK CONSTRAINT [FK_LH_KH]
GO
ALTER TABLE [dbo].[PhanQuyen_Admin]  WITH CHECK ADD  CONSTRAINT [FK_PQAdmin_Admin] FOREIGN KEY([MaAdmin])
REFERENCES [dbo].[Admin] ([MaAdmin])
GO
ALTER TABLE [dbo].[PhanQuyen_Admin] CHECK CONSTRAINT [FK_PQAdmin_Admin]
GO
ALTER TABLE [dbo].[SanPham]  WITH CHECK ADD  CONSTRAINT [FK_SP_NSX] FOREIGN KEY([MaNSX])
REFERENCES [dbo].[NhaSanXuat] ([MaNSX])
GO
ALTER TABLE [dbo].[SanPham] CHECK CONSTRAINT [FK_SP_NSX]
GO
ALTER TABLE [dbo].[CT_DonHang]  WITH CHECK ADD CHECK  (([Thanhtien]>=(0)))
GO
ALTER TABLE [dbo].[CT_DonHang]  WITH CHECK ADD CHECK  (([Gia]>=(0)))
GO
ALTER TABLE [dbo].[DonHang]  WITH CHECK ADD CHECK  (([Trigia]>(0)))
GO
ALTER TABLE [dbo].[GioHang]  WITH CHECK ADD CHECK  (([Thanhtien]>=(0)))
GO
