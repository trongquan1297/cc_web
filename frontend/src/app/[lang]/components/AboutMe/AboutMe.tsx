import React from 'react';


const AboutMe: React.FC = ({}) => {
    return (
        <div className="about-me-container">
        <div className="image-column">
          <img
            src="/images/pic.png"
            alt="Profile"
            className="profile-image"
          />
        </div>
        <div className="text-column">
          <h2>About Me</h2>
          <p>
            Xin chào! Tôi là QuanNguyen, một người đam mê lập trình và sáng tạo.
            Tôi đã có nhiều kinh nghiệm trong lĩnh vực này và thích thách thức để học hỏi
            và phát triển kỹ năng của mình.
          </p>
          <p>
            Trang web này là nơi tôi chia sẻ những kiến thức, kinh nghiệm và sở thích của mình.
            Nếu bạn có bất kỳ câu hỏi hoặc muốn liên hệ, đừng ngần ngại liên lạc với tôi!
          </p>
        </div>
        
      </div>
    );
  };

export default AboutMe