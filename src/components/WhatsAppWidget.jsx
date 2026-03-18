import whatsAppIcon from '../assets/WhatsAppIcon.svg'
import Ficon from '../assets/Ficon.svg'
import './WhatsAppWidget.css'

function WhatsAppWidget() {
  return (
    <div className="whatsapp-widget">
      <div className="whatsapp-popup">
        <button className="whatsapp-close" aria-label="Close">
          ✕
        </button>
        <div className="whatsapp-popup-content">
          <div className="whatsapp-header-row">
            <div className="whatsapp-avatar">
              <img src={Ficon} alt="" />
            </div>
            <div className="whatsapp-info">
              <h3 className="whatsapp-title">CranioBalance</h3>
              <p className="whatsapp-status">
                <span className="status-dot"></span>
                Online now
              </p>
            </div>
          </div>
          <div className="whatsapp-message">
            <p>Hi there! 👋 Have a question? Chat with us on WhatsApp.</p>
          </div>
        </div>
      </div>
      <a 
        href="https://wa.me/5559876543" 
        target="_blank" 
        rel="noreferrer" 
        className="whatsapp-button"
        aria-label="Chat on WhatsApp"
      >
        <img src={whatsAppIcon} alt="" />
      </a>
    </div>
  )
}

export default WhatsAppWidget
