using System;
using System.Xml.Serialization;
using System.Collections.Generic;
using System.Xml.Serialization;
using Top.Api.Util;

namespace Top.Api.Request
{
    /// <summary>
    /// TOP API: taobao.openim.immsg.push
    /// </summary>
    public class OpenimImmsgPushRequest : BaseTopRequest<Top.Api.Response.OpenimImmsgPushResponse>
    {
        /// <summary>
        /// openim消息结构体
        /// </summary>
        public string Immsg { get; set; }

        public ImMsgDomain Immsg_ { set { this.Immsg = TopUtils.ObjectToJson(value); } } 

        #region ITopRequest Members

        public override string GetApiName()
        {
            return "taobao.openim.immsg.push";
        }

        public override IDictionary<string, string> GetParameters()
        {
            TopDictionary parameters = new TopDictionary();
            parameters.Add("immsg", this.Immsg);
            if (this.otherParams != null)
            {
                parameters.AddAll(this.otherParams);
            }
            return parameters;
        }

        public override void Validate()
        {
        }

	/// <summary>
	/// ImMsgDomain Data Structure.
	/// </summary>
	[Serializable]
	public class ImMsgDomain : TopObject
	{
	        /// <summary>
	        /// 发送的消息内容。根据不同消息类型，传不同的值。0(文本消息):填消息内容字符串。1(图片):base64编码的jpg或gif文件。3(语音):base64编码的amr文件。8(地理位置):经纬度，格式如 111,222
	        /// </summary>
	        [XmlElement("context")]
	        public string Context { get; set; }
	
	        /// <summary>
	        /// 消息发送者
	        /// </summary>
	        [XmlElement("from_user")]
	        public string FromUser { get; set; }
	
	        /// <summary>
	        /// json map，媒体信息属性。根据msgtype变化。0(文本):填空即可。 1(图片):需要图片格式，{"type":"jpg"}或{"type":"gif"}。   2(语音): 需要文件格式和语音长度信息{"type":"amr","playtime":5}
	        /// </summary>
	        [XmlElement("media_attr")]
	        public string MediaAttr { get; set; }
	
	        /// <summary>
	        /// 消息类型。0:文本消息。1:图片消息，只支持jpg、gif。2:语音消息，只支持amr。8:地理位置信息。
	        /// </summary>
	        [XmlElement("msg_type")]
	        public Nullable<long> MsgType { get; set; }
	
	        /// <summary>
	        /// 接收方appkey，默认本app，跨app发送时需要用到
	        /// </summary>
	        [XmlElement("to_appkey")]
	        public string ToAppkey { get; set; }
	
	        /// <summary>
	        /// 消息接受者
	        /// </summary>
	        [XmlArray("to_users")]
	        [XmlArrayItem("string")]
	        public List<string> ToUsers { get; set; }
	}

        #endregion
    }
}
