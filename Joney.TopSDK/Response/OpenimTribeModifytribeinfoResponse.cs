using System;
using System.Xml.Serialization;
using System.Collections.Generic;

namespace Top.Api.Response
{
    /// <summary>
    /// OpenimTribeModifytribeinfoResponse.
    /// </summary>
    public class OpenimTribeModifytribeinfoResponse : TopResponse
    {
        /// <summary>
        /// 群服务code
        /// </summary>
        [XmlElement("tribe_code")]
        public long TribeCode { get; set; }

    }
}
