using System;
using System.Xml.Serialization;

namespace Top.Api.Domain
{
    /// <summary>
    /// Userinfos Data Structure.
    /// </summary>
    [Serializable]
    public class Userinfos : TopObject
    {
        /// <summary>
        /// 地址，最大长度512
        /// </summary>
        [XmlElement("address")]
        public string Address { get; set; }

        /// <summary>
        /// 年龄
        /// </summary>
        [XmlElement("age")]
        public long Age { get; set; }

        /// <summary>
        /// 职位，最大长度128字节
        /// </summary>
        [XmlElement("career")]
        public string Career { get; set; }

        /// <summary>
        /// email地址，最大长度128字节
        /// </summary>
        [XmlElement("email")]
        public string Email { get; set; }

        /// <summary>
        /// 扩展字段（Json），最大长度4096字节
        /// </summary>
        [XmlElement("extra")]
        public string Extra { get; set; }

        /// <summary>
        /// 性别。M: 男。 F：女
        /// </summary>
        [XmlElement("gender")]
        public string Gender { get; set; }

        /// <summary>
        /// 最后更新时间
        /// </summary>
        [XmlElement("gmt_modified")]
        public string GmtModified { get; set; }

        /// <summary>
        /// 头像url，最大长度512字节
        /// </summary>
        [XmlElement("icon_url")]
        public string IconUrl { get; set; }

        /// <summary>
        /// 手机号码，最大长度16字节
        /// </summary>
        [XmlElement("mobile")]
        public string Mobile { get; set; }

        /// <summary>
        /// 名字，最大长度64
        /// </summary>
        [XmlElement("name")]
        public string Name { get; set; }

        /// <summary>
        /// 昵称，最大长度64字节
        /// </summary>
        [XmlElement("nick")]
        public string Nick { get; set; }

        /// <summary>
        /// im密码，最大长度64字节
        /// </summary>
        [XmlElement("password")]
        public string Password { get; set; }

        /// <summary>
        /// qq，最大长度20字节
        /// </summary>
        [XmlElement("qq")]
        public string Qq { get; set; }

        /// <summary>
        /// remark，最大长度128字节
        /// </summary>
        [XmlElement("remark")]
        public string Remark { get; set; }

        /// <summary>
        /// 用户激活状态，0表示未激活，1表示激活
        /// </summary>
        [XmlElement("status")]
        public long Status { get; set; }

        /// <summary>
        /// 淘宝账号，最大长度64字节
        /// </summary>
        [XmlElement("taobaoid")]
        public string Taobaoid { get; set; }

        /// <summary>
        /// im用户名，最大长度64字节
        /// </summary>
        [XmlElement("userid")]
        public string Userid { get; set; }

        /// <summary>
        /// vip（Json），最大长度512字节
        /// </summary>
        [XmlElement("vip")]
        public string Vip { get; set; }

        /// <summary>
        /// 微信，最大长度64字节
        /// </summary>
        [XmlElement("wechat")]
        public string Wechat { get; set; }

        /// <summary>
        /// 微博，最大长度256字节
        /// </summary>
        [XmlElement("weibo")]
        public string Weibo { get; set; }
    }
}
