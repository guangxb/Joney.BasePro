using System;
using System.Xml.Serialization;
using System.Collections.Generic;

namespace Top.Api.Response
{
    /// <summary>
    /// OpenimIoscertSandboxSetResponse.
    /// </summary>
    public class OpenimIoscertSandboxSetResponse : TopResponse
    {
        /// <summary>
        /// 操作成功
        /// </summary>
        [XmlElement("code")]
        public string Code { get; set; }

    }
}
